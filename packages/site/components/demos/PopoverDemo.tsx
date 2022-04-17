import { Menu } from '@tamagui/feather-icons'
import React from 'react'
import { Button, H4, Paragraph, Popover, YStack } from 'tamagui'

export default function PopoverDemo() {
  return (
    <Popover
      placement="top right"
      trigger={(props) => <Button size="$6" icon={Menu} circular {...props} />}
    >
      <Popover.Content>
        <Popover.Arrow backgroundColor="$background" />
        <YStack backgroundColor="$background" padding="$6" borderRadius="$4">
          <H4>Popover contents</H4>
          <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
        </YStack>
      </Popover.Content>
    </Popover>
  )
}
