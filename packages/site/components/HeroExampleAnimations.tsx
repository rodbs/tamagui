import { ScrollView } from 'react-native'
import { Button, H2, H3, Paragraph, Separator, Square, XStack, YStack } from 'tamagui'

import { ContainerLarge } from './Container'

export function HeroExampleAnimations() {
  return (
    <YStack>
      <ContainerLarge position="relative" space="$6">
        <YStack zi={1} space="$2">
          <H2 als="center">First class animations</H2>
          <H3 theme="alt2" als="center" fow="400">
            Swappable animation drivers for every platform.
          </H3>
        </YStack>

        <XStack w="100%" theme="alt1" br="$6" overflow="hidden" bc="$background" h={400}>
          <YStack ai="center" jc="center" f={2}>
            {/* @ts-ignore */}
            <Square size={100} bc="$color" br="$6" />
          </YStack>
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
              ].map((item) => {
                return (
                  <YStack
                    key={item.name}
                    px="$3"
                    py="$1"
                    cursor="pointer"
                    hoverStyle={{
                      bc: '$backgroundHover',
                    }}
                  >
                    <Paragraph cursor="inherit" size="$4" fontWeight="800">
                      {item.name}
                    </Paragraph>
                    <Paragraph cursor="inherit" theme="alt2">
                      {item.description}
                    </Paragraph>
                  </YStack>
                )
              })}
            </ScrollView>

            <Separator />

            <YStack p="$4" ai="center" jc="$center">
              <Button theme="blue" size="$6">
                Run
              </Button>
            </YStack>
          </YStack>
        </XStack>
      </ContainerLarge>
    </YStack>
  )
}
