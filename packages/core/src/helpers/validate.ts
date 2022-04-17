// published a patched version that works on native
// @ts-ignore
const { default: ow } = require('@tamagui/ow/dev-only')

let Config: any
let Tokens: any
let Font: any

export const validateConfig = (conf: any) => {
  if (!conf) {
    console.warn('no conf?')
    return
  }
  try {
    ow(conf, Config)
  } catch (err: any) {
    console.warn('Given config:\n', JSON.stringify(conf, null, 2), err)
  }
}

export const validateTokens = (tokens: any) => {
  try {
    ow(tokens, Tokens)
  } catch (err: any) {
    console.warn('Given tokens:\n', JSON.stringify(tokens, null, 2), err)
  }
}

export const validateFont = (font: any) => {
  try {
    ow(font, Font)
  } catch (err: any) {
    console.warn('Given font:\n', JSON.stringify(font, null, 2), err)
  }
}

if (process.env.NODE_ENV === 'development') {
  Config = ow.object.exactShape({
    defaultTheme: ow.optional.string,
    disableRootThemeClass: ow.optional.boolean,
    shorthands: ow.optional.object.valuesOfType(ow.string),
    themes: ow.object.valuesOfType(ow.object),
    tokens: ow.object.valuesOfType(ow.object),
    media: ow.object.valuesOfType(ow.object),
    animations: ow.object.valuesOfType(ow.object),
  })

  Font = ow.object.exactShape({
    family: ow.string,
    size: ow.object.nonEmpty.valuesOfType(ow.number),
    lineHeight: ow.object.nonEmpty.valuesOfType(ow.number),
    weight: ow.object.nonEmpty.valuesOfType(ow.string),
    letterSpacing: ow.object.nonEmpty.valuesOfType(ow.number),
  })

  Tokens = ow.object.exactShape({
    font: ow.object.valuesOfType(Font),
    size: ow.object.nonEmpty.valuesOfType(ow.number),
    space: ow.object.nonEmpty.valuesOfType(ow.number),
    zIndex: ow.object.nonEmpty.valuesOfType(ow.number),
    radius: ow.object.nonEmpty.valuesOfType(ow.number),
    color: ow.object.nonEmpty.valuesOfType(ow.string),
  })
}
