import React, { ReactElement, forwardRef } from 'react'

import { ThemeName } from '../types'
import { Theme } from '../views/Theme'
import { ThemeInverse } from '../views/ThemeInverse'

export type ThemeableProps = {
  theme?: ThemeName | string | null
  themeInverse?: boolean
}

export function themeable<Component extends (props: any) => any>(component: Component) {
  const withThemeComponent = forwardRef(function WithTheme(
    { themeInverse, theme, ...rest }: any,
    ref
  ) {
    const element = React.createElement(component, { ...rest, ref } as any)
    if (themeInverse) {
      return <ThemeInverse>{element}</ThemeInverse>
    }
    if (theme) {
      return <Theme name={(theme as any) || null}>{element}</Theme>
    }
    return element
  })

  const withTheme: any = withThemeComponent
  withTheme.displayName = `Themed(${
    (component as any)?.displayName || (component as any)?.name || 'Anonymous'
  })`

  return withTheme as Component extends (props: infer P) => infer R
    ? (
        props: Omit<P, 'theme' | 'themeInverse'> & {
          theme?: ThemeName | null
          themeInverse?: boolean
        }
      ) => R
    : unknown
}
