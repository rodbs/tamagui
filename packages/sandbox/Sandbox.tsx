// debug-verbose
import React, { useState } from 'react'
import { Button, Square, Theme, VisuallyHidden } from 'tamagui'

import Tamagui from './tamagui.config'

React['keep']

export const Sandbox = () => {
  const [theme, setTheme] = useState('light' as any)
  return (
    <Tamagui.Provider injectCSS defaultTheme="light">
      <Theme name={theme}>
        <div style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}>
          <a
            style={{ marginBottom: 20 }}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            Switch theme
          </a>
          <Test />
        </div>
      </Theme>
    </Tamagui.Provider>
  )
}

export const Test = (props) => {
  return (
    <>
      <VisuallyHidden>something</VisuallyHidden>
      <AnimationTest />
    </>
  )
}

const AnimationTest = () => {
  const [positionI, setPositionI] = useState(0)
  const position = positions[positionI]
  const next = (to = 1) => {
    setPositionI((x) => {
      return (x + to) % positions.length
    })
  }

  return (
    <>
      <Square
        animation="bouncy"
        debug
        elevation="$4"
        size={110}
        bc="red"
        br="$9"
        hoverStyle={{
          scale: 1.1,
        }}
        pressStyle={{
          scale: 0.9,
        }}
        {...position}
        onPress={() => next()}
      />

      <Button pos="absolute" bottom={20} left={20} size="$6" circular onPress={() => next()} />
    </>
  )
}

export const positions = [
  {
    x: 0,
    y: 0,
    scale: 1,
    rotate: '0deg',
  },
  {
    x: -50,
    y: -50,
    scale: 0.5,
    rotate: '-45deg',
    hoverStyle: {
      scale: 0.6,
      x: -85,
      y: -85,
    },
    pressStyle: {
      scale: 0.4,
    },
  },
  {
    x: 50,
    y: 50,
    scale: 1,
    rotate: '180deg',
    hoverStyle: {
      scale: 1,
    },
    pressStyle: {
      scale: 1,
    },
  },
]
