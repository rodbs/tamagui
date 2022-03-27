import { Play } from '@tamagui/feather-icons'
import Link from 'next/link'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, H2, H3, Paragraph, Separator, Square, Theme, XStack, YStack } from 'tamagui'

import { ContainerLarge } from './Container'

const positions = [
  {
    x: 0,
    y: 0,
    scale: 1,
  },
  {
    x: -100,
    y: -100,
    scale: 0.5,
    rotate: '-45deg',
  },
  {
    x: 100,
    y: 100,
    scale: 1,
    rotate: '90deg',
  },
]

export function HeroExampleAnimations() {
  const [animation, setAnimation] = useState(0)
  const [positionI, setPositionI] = useState(0)
  const position = positions[positionI]

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
              <Square
                className="all ease-in ms300"
                elevation="$4"
                // @ts-expect-error TODO
                size={110}
                bc="$color"
                br="$8"
                onPress={() => {
                  setPositionI((x) => (x + 1) % positions.length)
                }}
                {...position}
              />
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
                const isActive = i === animation
                return (
                  <Theme name={isActive ? null : 'alt2'}>
                    <YStack
                      key={item.name}
                      {...(isActive && {
                        bc: '$backgroundHover',
                      })}
                      px="$4"
                      py="$2"
                      cursor="pointer"
                      hoverStyle={{
                        bc: '$backgroundHover',
                      }}
                      onPress={() => {
                        setAnimation(i)
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
              <Button
                iconAfter={Play}
                theme="blue"
                size="$6"
                onPress={() => {
                  setPositionI((x) => (x + 1) % positions.length)
                }}
              >
                Go
              </Button>
            </YStack>
          </YStack>
        </XStack>

        <Link href="/docs/core/animations" passHref>
          <Button als="center" theme="blue" tag="a">
            Animations docs &raquo;
          </Button>
        </Link>
      </ContainerLarge>
    </YStack>
  )
}
