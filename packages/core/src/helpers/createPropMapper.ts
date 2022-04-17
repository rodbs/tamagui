import { getConfig } from '../conf'
import { isWeb } from '../constants/platform'
import { Variable, isVariable } from '../createVariable'
import { StaticConfig, TamaguiInternalConfig } from '../types'
import { isObj } from './isObj'

export type ResolveVariableTypes = 'auto' | 'value' | 'variable'

export const createPropMapper = (c: StaticConfig) => {
  const variants = c.variants || {}

  // goes through specificity finding best matching variant function
  function getVariantFunction(variant: any, key: string, value: any) {
    for (const cat in tokenCategories) {
      if (key in tokenCategories[cat]) {
        const spreadVariant = variant[`...${cat}`]
        if (spreadVariant) {
          return spreadVariant
        }
      }
    }
    let fn: any
    if (typeof value === 'number') {
      fn = variant[':number']
    } else if (typeof value === 'string') {
      fn = variant[':string']
    } else if (value === true || value === false) {
      fn = variant[':boolean']
    }
    fn = fn || variant[value]
    // fallback to size ultimately - could do token level detection
    return fn || variant['...'] || variant['...size']
  }

  const defaultProps = c.defaultProps || {}

  return (
    key: string,
    value: any,
    theme: any,
    props: any,
    staticConfig: StaticConfig,
    returnVariablesAs: ResolveVariableTypes = !!props.animation ? 'value' : 'auto',
    avoidDefaultProps = false
  ) => {
    const conf = getConfig()
    if (!conf) {
      console.trace('no conf! err')
      return
    }

    // handled here because we need to resolve this off tokens, its the only one-off like this
    let fontFamily = props.fontFamily || defaultProps.fontFamily || '$body'

    // expand variants
    const variant = variants && variants[key]

    if (variant && value !== undefined) {
      let variantValue = getVariantFunction(variant, key, value)

      if (!variantValue) {
        return value
      }

      if (typeof variantValue === 'function') {
        variantValue = variantValue(value, {
          tokens: conf.tokensParsed,
          theme,
          // we avoid passing in default props for media queries because that would confuse things like SizableText.size:
          props: avoidDefaultProps
            ? props
            : new Proxy(props, {
                get(target, key) {
                  if (Reflect.has(target, key)) {
                    return Reflect.get(target, key)
                  }
                  // these props may be extracted into classNames, but we still want to access them
                  // at runtime, so we proxy back to defaultProps but don't pass them
                  if (staticConfig.defaultProps) {
                    return Reflect.get(staticConfig.defaultProps, key)
                  }
                },
              }),
        })
      }

      // console.log(
      //   'GOGO',
      //   variantValue,
      //   'now',
      //   resolveTokens(variantValue, conf, theme, fontFamily, returnVariablesAs)
      // )

      if (isObj(variantValue)) {
        variantValue = resolveTokens(variantValue, conf, theme, fontFamily, returnVariablesAs)
      }

      return variantValue
    }

    let shouldReturn = false

    // handle shorthands
    if (conf.shorthands[key]) {
      shouldReturn = true
      key = conf.shorthands[key]
    }

    if (value) {
      shouldReturn = true
      if (value[0] === '$') {
        value = getToken(key, value, conf, theme, fontFamily, returnVariablesAs)
      } else if (isVariable(value)) {
        value = getVariableValue(value, returnVariablesAs)
      }
    }

    if (shouldReturn) {
      return {
        [key]: value,
      }
    }
  }
}

const resolveTokens = (
  input: Object,
  conf: TamaguiInternalConfig,
  theme: any,
  fontFamily: any,
  resolveAs?: ResolveVariableTypes
) => {
  let res = {}
  for (const rKey in input) {
    const fKey = conf.shorthands[rKey] || rKey
    const val = input[rKey]
    if (isVariable(val)) {
      res[fKey] =
        resolveAs === 'variable' ? val : !isWeb || resolveAs === 'value' ? val.val : val.variable
    } else if (typeof val === 'string') {
      const fVal = val[0] === '$' ? getToken(fKey, val, conf, theme, fontFamily, resolveAs) : val
      res[fKey] = fVal
    } else {
      if (isObj(val)) {
        // for things like shadowOffset, hoverStyle which is a sub-object
        res[fKey] = resolveTokens(val, conf, theme, fontFamily, resolveAs)
      } else {
        // nullish values cant be tokens so need no exrta parsing
        res[fKey] = input[fKey]
      }
    }
    if (process.env.NODE_ENV === 'development') {
      if (res[fKey]?.[0] === '$') {
        console.warn(`⚠️ Missing token in theme ${theme.name}:`, fKey, res[fKey])
      }
    }
  }
  return res
}

const getToken = (
  key: string,
  value: string,
  { tokensParsed }: TamaguiInternalConfig,
  theme: any,
  fontFamily: string | undefined = '$body',
  resolveAs?: ResolveVariableTypes
) => {
  let valOrVar: any
  let hasSet = false
  const valueName = value[0] === '$' ? value.slice(1) : value
  if (valueName in theme) {
    valOrVar = theme[valueName]
    hasSet = true
  } else {
    switch (key) {
      case 'fontFamily':
        valOrVar = tokensParsed.font[value]?.family || value
        hasSet = true
        break
      case 'fontSize':
        valOrVar = tokensParsed.font[fontFamily]?.size[value] || value
        hasSet = true
        break
      case 'lineHeight':
        valOrVar = tokensParsed.font[fontFamily]?.lineHeight[value] || value
        hasSet = true
        break
      case 'letterSpacing':
        valOrVar = tokensParsed.font[fontFamily]?.letterSpacing[value] || value
        hasSet = true
        break
      case 'fontWeight':
        valOrVar = tokensParsed.font[fontFamily]?.weight[value] || value
        hasSet = true
        break
    }
    for (const cat in tokenCategories) {
      if (key in tokenCategories[cat]) {
        const res = tokensParsed[cat][value]
        if (res) {
          valOrVar = res
          hasSet = true
        }
      }
    }
    if (!hasSet) {
      const spaceVar = tokensParsed.space[value]
      if (spaceVar) {
        valOrVar = spaceVar
        hasSet = true
      }
    }
  }
  if (hasSet) {
    return getVariableValue(valOrVar, resolveAs)
  }
  if (process.env.NODE_ENV === 'development') {
    if (value && value[0] === '$') {
      console.warn(`⚠️ Missing token in theme:`, value, theme)
      return null
    }
  }
  return value
}

function getVariableValue(valOrVar: Variable | any, resolveAs: ResolveVariableTypes = 'auto') {
  if (isVariable(valOrVar)) {
    if (resolveAs === 'variable') {
      return valOrVar
    }
    if (!isWeb || resolveAs === 'value') {
      return valOrVar.val
    }
    return valOrVar.variable
  }
  return valOrVar
}

// just specificy the least costly, all else go to `space` (most keys - we can exclude)
const tokenCategories = {
  radius: {
    borderRadius: true,
  },
  size: {
    width: true,
    height: true,
    minWidth: true,
    minHeight: true,
    maxWidth: true,
    maxHeight: true,
  },
  color: {
    color: true,
    backgroundColor: true,
    borderColor: true,
    borderBottomColor: true,
    borderTopColor: true,
    borderLeftColor: true,
    borderRightColor: true,
  },
}
