import { useForceUpdate } from '@tamagui/use-force-update'
import React, { useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

import { THEME_CLASSNAME_PREFIX, THEME_NAME_SEPARATOR } from '../constants/constants'
import { useIsomorphicLayoutEffect } from '../constants/platform'
import { isVariable } from '../createVariable'
import { areEqualSets } from '../helpers/areEqualSets'
import { ThemeContext } from '../ThemeContext'
import { ThemeManager, ThemeManagerContext } from '../ThemeManager'
import { ThemeObject, Themes } from '../types'
import { useConstant } from './useConstant'

const SEP = THEME_NAME_SEPARATOR

type UseThemeState = {
  uuid: Object
  keys: Set<string>
  isRendering: boolean
}

export const useTheme = (themeName?: string | null, componentName?: string): ThemeObject => {
  const forceUpdate = useForceUpdate()
  const { name, theme, themes, themeManager, className } = useChangeThemeEffect(
    themeName,
    componentName
  )

  const state = useRef() as React.MutableRefObject<UseThemeState>
  if (!state.current) {
    state.current = {
      uuid: {},
      keys: new Set(),
      isRendering: true,
    }
  }
  state.current.isRendering = true

  // track usage
  useIsomorphicLayoutEffect(() => {
    const st = state.current
    st.isRendering = false
    const cur = themeManager?.keys.get(st.uuid)
    if (!cur || !areEqualSets(st.keys, cur)) {
      themeManager?.track(st.uuid, st.keys)
    }
  })

  useEffect(() => {
    return themeManager?.onUpdate(state.current.uuid, forceUpdate)
  }, [])

  return useMemo(
    () => {
      if (!theme) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('No theme', { themeName, theme })
        }
        return theme as any
      }
      return new Proxy(theme, {
        get(_, key) {
          if (!name) {
            return Reflect.get(_, key)
          }
          if (key === GetThemeManager) {
            return themeManager
          }
          if (key === 'name') {
            return name
          }
          if (key === 'className') {
            return className
          }
          let activeTheme = themes[name]
          if (!activeTheme) {
            if (process.env.NODE_ENV !== 'test') {
              console.error('No theme by name', name, 'only:', themes, 'keeping current theme')
            }
            activeTheme = theme
          }
          if (typeof key === 'string') {
            const val = activeTheme[key]
            if (process.env.NODE_ENV === 'development') {
              if (typeof val === 'undefined') {
                console.warn(`No theme value "${String(key)}" in`, activeTheme)
                return null
              }
              if (!isVariable(val)) {
                console.warn('Non variable!', val)
              } else if (val.name !== key) {
                console.warn('Non-matching name for variable to key', key, val.name)
              }
            }
            if (state.current.isRendering) {
              state.current.keys.add(key)
            }
            return val
          }
          return Reflect.get(_, key)
        },
      })
    },
    [
      /* if concurrent mode wanted put manager.name here */
    ]
  )
}

const GetThemeManager = Symbol('GetThemeManager')

export const getThemeManager = (theme: any) => {
  return theme?.[GetThemeManager]
}

export const useThemeName = (opts?: { parent?: true }) => {
  const parent = useContext(ThemeManagerContext)
  const [name, setName] = useState(parent.name)

  useIsomorphicLayoutEffect(() => {
    return parent.onChangeTheme((next, manager) => {
      setName(opts?.parent ? manager.parentName : next)
    })
  }, [parent])

  return name || 'light'
}

export const useDefaultThemeName = () => {
  return useContext(ThemeContext)?.defaultTheme
}

function getNextTheme({
  parentManager,
  themes,
  shortName,
  componentName,
}: {
  parentManager: ThemeManager
  themes: Themes
  shortName?: string | null
  componentName?: string | null
}) {
  const parts = [
    ...new Set([
      ...parentManager.fullName.split('_'),
      ...(shortName || '').split('_'),
      componentName,
    ]),
  ].filter(Boolean)
  let nextName: string | null = null

  while (parts.length) {
    const name = parts.join('_')
    if (name in themes) {
      nextName = name
      break
    }
    parts.pop()
  }

  if (!nextName) {
    return null
  }

  return {
    name: nextName,
    theme: themes[nextName],
    className: `${THEME_CLASSNAME_PREFIX}${nextName}`,
  }
}

export const useChangeThemeEffect = (shortName?: string | null, componentName?: string) => {
  const parentManager = useContext(ThemeManagerContext)
  const { themes } = useContext(ThemeContext)!
  const next = getNextTheme({ parentManager, shortName, componentName, themes })
  const forceUpdate = useForceUpdate()
  const themeManager = useConstant<ThemeManager | null>(() => {
    if (!next) {
      return null
    }
    const manager = new ThemeManager()
    manager.update({ ...next, parentManager })
    return manager
  })

  if (typeof document !== 'undefined') {
    useLayoutEffect(() => {
      if (!themeManager) {
        return
      }
      if (next?.name) {
        themeManager.update({ ...next, parentManager })
      }
      const dispose = parentManager.onChangeTheme((nextParent) => {
        if (!nextParent) return
        const next = getNextTheme({ parentManager, shortName, componentName, themes })
        if (!next) return
        themeManager.update({ ...next, parentManager })
        // forceUpdate()
      })
      return () => {
        dispose()
      }
    }, [themes, next?.name])
  }

  return {
    theme: parentManager.theme || themes['light'],
    name: parentManager.name,
    ...next,
    themes,
    themeManager,
  }
}
