import { createContext } from 'react'

import { getThemes } from './conf'
import { THEME_CLASSNAME_PREFIX, THEME_NAME_SEPARATOR } from './static'
import { ThemeObject, Themes } from './types'

type ThemeListener = (name: string | null, themeManager: ThemeManager) => void

export type SetActiveThemeProps = {
  parentManager?: ThemeManager | null
  name?: string | null
  theme?: any
}

export class ThemeManager {
  name: string | null = ''
  keys = new Map<any, Set<string>>()
  listeners = new Map<any, Function>()
  themeListeners = new Set<ThemeListener>()
  parentManager: ThemeManager | null = null
  theme: ThemeObject | null = null

  get parentName() {
    return this.parentManager?.name ?? null
  }

  get fullName(): string {
    return this.getNextTheme().name || this.name || ''
    // const parentName = this.parentManager?.fullName || ''
    // const name = this.name || ''
    // const parts = [...new Set([...`${parentName}_${name}`.split('_')])].filter(Boolean)
    // return parts.join('_')
  }

  update({ name, theme, parentManager = null }: SetActiveThemeProps = {}) {
    if (name === this.name && parentManager == this.parentManager) {
      return
    }
    this.name = name || null
    this.theme = theme
    this.parentManager = parentManager
    this.notifyListeners()
  }

  getNextTheme(
    props: { themes?: Themes; name?: string | null; componentName?: string | null } = {},
    debug = false
  ) {
    const { themes = getThemes(), name, componentName } = props

    if (!name) {
      if (componentName) {
        const name = `${this.name}_${componentName}`
        const theme = themes[name]
        if (theme) {
          return { name, theme, className: this.#getClassName(name) }
        }
      }
      return {
        name: this.name,
        theme: this.theme,
      }
    }

    let nextName = props.name || this.name || ''
    let parentName = this.fullName

    while (true) {
      if (nextName in themes) {
        break
      }
      nextName = `${parentName}_${name}`
      if (nextName in themes) {
        break
      }
      if (!parentName.includes(THEME_NAME_SEPARATOR)) {
        // not found!
        console.warn('not found??', props, this)
        break
      }
      // go up one
      parentName = parentName.slice(0, parentName.lastIndexOf(THEME_NAME_SEPARATOR))
    }

    if (componentName) {
      const componentThemeName = `${nextName}_${componentName}`
      if (componentThemeName in themes) {
        nextName = componentThemeName
      }
    }

    let theme = themes[nextName]
    if (!theme) {
      theme = themes[`light_${nextName}`]
    }

    if (process.env.NODE_ENV === 'development' && debug) {
      console.log('getNextTheme', { props, nextName, parentName })
    }

    if (!theme) {
      console.log('why no theme', nextName, parentName)
    }

    return {
      name: nextName,
      theme,
      className: this.#getClassName(nextName),
    }
  }

  #getClassName(name: string) {
    return `tamagui-theme ${THEME_CLASSNAME_PREFIX}${name}`
      .replace('light_', '')
      .replace('dark_', '')
  }

  track(uuid: any, keys: Set<string>) {
    if (!this.name) return
    this.keys.set(uuid, keys)
  }

  notifyListeners() {
    if (!this.name) {
      this.keys.clear()
    }
    for (const [uuid, keys] of this.keys.entries()) {
      if (keys.size) {
        this.listeners.get(uuid)?.()
      }
    }
    this.themeListeners.forEach((cb) => cb(this.name, this))
  }

  onChangeTheme(cb: ThemeListener) {
    this.themeListeners.add(cb)
    return () => {
      this.themeListeners.delete(cb)
    }
  }

  onUpdate(uuid: any, cb: Function) {
    this.listeners.set(uuid, cb)
    return () => {
      this.listeners.delete(uuid)
      this.keys.delete(uuid)
    }
  }
}

export const ThemeManagerContext = createContext<ThemeManager | null>(null)
export const emptyManager = new ThemeManager()
