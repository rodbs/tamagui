import { Check } from '@tamagui/feather-icons'
import React from 'react'
import { Paragraph, Text, XStack, YStack } from 'tamagui'

export const Features = (props: any) => {
  return props.items.map((feature, i) => (
    <XStack p="$1" tag="li" key={i}>
      <Text color="$green9">
        <YStack w={25} h={25} ai="center" jc="center" bc="$green3" br={100} mr="$3">
          <Check size={12} color="var(--color)" />
        </YStack>
      </Text>
      <Paragraph color="$gray11">{feature}</Paragraph>
    </XStack>
  ))
}
