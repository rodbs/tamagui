import { useIsTouchDevice } from '@tamagui/core'
import React, { forwardRef, useState } from 'react'

import { Hoverable, HoverableProps } from './Hoverable'
import { YStack } from './Stacks'

export const HoverOrToggle = forwardRef(
  (
    {
      children,
      fallbackToPress,
      ...props
    }: HoverableProps & {
      fallbackToPress?: boolean
    },
    ref: any
  ) => {
    const isTouchDevice = useIsTouchDevice()

    if (isTouchDevice) {
      const [_isOn, setIsOn] = useState(false)
      if (!fallbackToPress) {
        return children
      }
      return (
        <YStack
          ref={ref}
          onPress={() => {
            setIsOn((x) => {
              const next = !x
              next ? props.onHoverIn?.() : props.onHoverOut?.()
              return next
            })
          }}
        >
          {children}
        </YStack>
      )
    } else {
      return <Hoverable {...props}>{children}</Hoverable>
    }
  }
)
