import { Play } from '@tamagui/feather-icons'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, H2, H3, Paragraph, Separator, Square, Theme, XStack, YStack } from 'tamagui'

import { ContainerLarge } from './Container'

export function HeroExampleAnimations() {
  const [active, setActive] = useState(0)

  return (
    <YStack>
      <ContainerLarge position="relative" space="$6">
        <YStack zi={1} space="$2">
          <H2 als="center">First class animations</H2>
          <H3 theme="alt2" als="center" fow="400">
            Swappable animation drivers for every platform
          </H3>
        </YStack>

        <XStack w="100%" theme="alt1" br="$6" overflow="hidden" bc="$background" h={400}>
          <Theme name="blue">
            <YStack className="hero-gradient" ai="center" jc="center" f={2}>
              {/* @ts-ignore */}
              <Square elevation="$4" size={110} bc="$color" br="$8" />
            </YStack>
          </Theme>
          <Separator vertical />
          <YStack f={1}>
            <ScrollView>
              {[
                { name: 'Bouncy', description: 'A bouncy spring', animation: 'bouncy' },
                { name: 'Lazy', description: 'A lazy, straightforward spring', animation: 'lazy' },
                {
                  name: 'Quick',
                  description: 'A quick, straightforward spring',
                  animation: 'quick',
                },
              ].map((item, i) => {
                const isActive = i === active
                return (
                  <Theme key={item.name} name={isActive ? 'alt2' : null}>
                    <YStack
                      bc="$background"
                      px="$4"
                      py="$2"
                      cursor="pointer"
                      hoverStyle={{
                        bc: '$backgroundHover',
                      }}
                      onPress={() => {
                        setActive(i)
                      }}
                    >
                      <Paragraph cursor="inherit" size="$4" fontWeight="800">
                        {item.name}
                      </Paragraph>
                      <Paragraph cursor="inherit" theme="alt2">
                        {item.description}
                      </Paragraph>
                    </YStack>
                  </Theme>
                )
              })}
            </ScrollView>

            <Separator />

            <YStack p="$4" ai="center" jc="$center">
              <Button iconAfter={Play} theme="blue" size="$6">
                Run
              </Button>
            </YStack>
          </YStack>
        </XStack>
      </ContainerLarge>
    </YStack>
  )
}
