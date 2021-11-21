import React from 'react'

import { getTamaguiConfig } from '../createTamagui'
import { Variable } from '../createVariable'
import { StaticComponent, StaticConfig, StaticConfigParsed, TamaguiInternalConfig } from '../types'
import { isObj } from './isObj'

export function extendStaticConfig(
  // can be undefined when loading with @tamagui/fake-react-native
  // could be fixed a bit cleaner
  Component?: StaticComponent | React.Component<any>,
  config: StaticConfig = {}
): StaticConfigParsed | null {
  const parent = (Component || {}) as any
  if (!parent.staticConfig) {
    // if no static config, we are extending an external component
    parent.staticConfig = {
      Component,
    }
  }

  const variants = {
    ...parent.staticConfig.variants,
  }

  // merge variants without clobbering previous... can we tho (typed??
  if (config.variants) {
    for (const key in config.variants) {
      if (variants[key]) {
        variants[key] = {
          ...variants[key],
          ...config.variants[key],
        }
      } else {
        variants[key] = config.variants[key]
      }
    }
  }

  // {
  //   ...a.staticConfig.variants,
  //   ...config.variants,
  // }

  return parseStaticConfig({
    ...parent.staticConfig,
    variants,
    isText: config.isText || parent.staticConfig.isText || false,
    neverFlatten: config.neverFlatten ?? parent.staticConfig.neverFlatten,
    ensureOverriddenProp: config.ensureOverriddenProp ?? parent.staticConfig.ensureOverriddenProp,
    validStyles: config.validStyles
      ? {
          ...parent.staticConfig.validStyles,
          ...config.validStyles,
        }
      : parent.staticConfig.validStyles,
    validPropsExtra: {
      ...parent.staticConfig.validPropsExtra,
      ...config.validPropsExtra,
    },
    defaultProps: {
      ...parent.staticConfig.defaultProps,
      ...config.defaultProps,
    },
  })
}

export function parseStaticConfig(c: StaticConfig): StaticConfigParsed {
  const variants = c.variants
  let variantsParsed
  const defaultProps = c.defaultProps || {}
  return {
    ...c,
    parsed: true,

    propMapper(key: string, value: any, theme: any, props: any) {
      const conf = getTamaguiConfig()
      if (!conf) {
        console.trace('err')
        return
      }
      if (variants && !variantsParsed) {
        variantsParsed = parseVariants(variants, conf)
      }

      let fontFamily = props.fontFamily || defaultProps.fontFamily || 'body'
      if (fontFamily[0] === '$') {
        fontFamily = fontFamily.slice(1)
      }

      // expand variants
      const variant = variantsParsed?.[key]

      if (variant && typeof value !== 'undefined') {
        const tokenKey = typeof value === 'string' && value[0] === '$' ? value.slice(1) : value
        const val =
          tokenKey === true ? variant['true'] : variant[tokenKey] ?? variant['...'] ?? value

        const res =
          typeof val === 'function'
            ? val(tokenKey, { tokens: conf.tokens, theme, props })
            : isObj(val)
            ? { ...val }
            : val

        if (isObj(res)) {
          for (const rKey in res) {
            const fKey = conf.shorthands[rKey] || rKey
            if (rKey !== fKey) {
              console.log('delete me', rKey)
              delete res[rKey]
            }
            const val = res[rKey]
            if (val instanceof Variable) {
              res[fKey] = val.variable
            } else if (typeof val === 'string') {
              const fVal = val[0] === '$' ? getToken(fKey, val, conf, fontFamily) : val
              res[fKey] = fVal
            } else {
              // nullish values cant be tokens so need no exrta parsing
            }
          }
        }

        return res
      }

      let shouldReturn = false

      // handle shorthands
      if (conf.shorthands[key]) {
        shouldReturn = true
        key = conf.shorthands[key]
      }

      if (value && value[0] === '$') {
        shouldReturn = true
        value = getToken(key, value, conf, fontFamily)
      }

      if (value instanceof Variable) {
        shouldReturn = true
        value = value.variable
      }

      if (shouldReturn) {
        return {
          [key]: value,
        }
      }
    },
  }
}

const getToken = (
  key: string,
  value: string,
  { tokensParsed, themeParsed }: TamaguiInternalConfig,
  fontFamily: string | undefined = 'body'
) => {
  if (themeParsed[value]) {
    return themeParsed[value].variable
  }
  if (key === 'fontFamily') {
    return tokensParsed.font[value]?.family || value
  }
  if (key === 'fontSize') {
    return tokensParsed.font[fontFamily]?.size[value] || value
  }
  if (key === 'lineHeight') {
    return tokensParsed.font[fontFamily].lineHeight[value]
  }
  if (key === 'letterSpacing') {
    return tokensParsed.font[fontFamily].letterSpacing[value]
  }
  if (key === 'fontWeight') {
    return tokensParsed.font[fontFamily].weight[value]
  }
  for (const cat in tokenCategories) {
    if (tokenCategories[cat][key]) {
      const res = tokensParsed[cat][value]
      if (res) {
        return res.variable
      } else {
        const themeVar = themeParsed[value]
        if (themeVar) {
          return themeVar.variable
        }
      }
    }
  }
  const spaceVar = tokensParsed.space[value]
  if (spaceVar) {
    return spaceVar.variable
  }
  return value
}

// just specificy the least costly, all else go to `space` (most keys - we can exclude)

const tokenCategories = {
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

// turns variant spreads into individual lookups
function parseVariants(variants: any, conf: TamaguiInternalConfig) {
  return Object.keys(variants).reduce((acc, key) => {
    acc[key] = Object.keys(variants[key]).reduce((vacc, vkey) => {
      const variantVal = variants[key][vkey]
      if (vkey.startsWith('...')) {
        // set the default one at '...' for easy fallback on non-exact-variant-match
        vacc['...'] = variantVal
        const tokenKey = vkey.slice(3)
        const tokens = conf.tokens[tokenKey]
        for (const tkey in tokens) {
          vacc[tkey] = variantVal
        }
      } else {
        vacc[vkey] = variantVal
      }
      return vacc
    }, {})
    return acc
  }, {})
}
