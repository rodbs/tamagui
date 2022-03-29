import { Play } from '@tamagui/feather-icons'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import {
  AnimationKeys,
  Button,
  GetAnimationKeys,
  H2,
  H3,
  Paragraph,
  Separator,
  Square,
  TamaguiConfig,
  Theme,
  XStack,
  YStack,
} from 'tamagui'

import { animations } from '../constants/animations'
import { ContainerLarge } from './Container'
import { LogoIcon, TamaguiLogo } from './TamaguiLogo'

const positions = [
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
  },
  {
    x: 50,
    y: 50,
    scale: 1,
    rotate: '180deg',
  },
]

const animationDescriptions = [
  {
    name: 'Bouncy',
    description: 'A bouncy spring',
    animation: 'bouncy',
    settings: animations.animations.bouncy,
  },
  {
    name: 'Lazy',
    description: 'A lazy, straightforward spring',
    animation: 'lazy',
    settings: animations.animations.lazy,
  },
  {
    name: 'Quick',
    description: 'A quick, straightforward spring',
    animation: 'quick',
    settings: animations.animations.quick,
  },
] as const

export function HeroExampleAnimations() {
  const [animationI, setAnimationI] = useState(0)
  const [positionI, setPositionI] = useState(0)
  const position = positions[positionI]
  const animation = animationDescriptions[animationI]

  return (
    <YStack>
      <ContainerLarge position="relative" space="$6">
        <YStack zi={1} space="$2">
          <H2 als="center">First-class animations</H2>
          <H3 ta="center" theme="alt2" als="center" fow="400">
            Plug-and-play drivers for every platform
          </H3>
        </YStack>

        <XStack
          bow={1}
          boc="$borderColor"
          w="100%"
          theme="alt1"
          br="$6"
          ov="hidden"
          bc="$background"
          h={320}
          x={0}
        >
          <Theme name="blue">
            <YStack
              pos="relative"
              className="hero-gradient"
              ai="center"
              jc="center"
              width="60%"
              $sm={{ width: '100%' }}
            >
              <Square
                // className="all ease-in ms300"
                animation={animation.animation}
                debug
                elevation="$4"
                size={110}
                bc="$color"
                // bc="red"
                br="$9"
                onPress={() => {
                  setPositionI((x) => (x + 1) % positions.length)
                }}
                {...position}
              >
                <LogoIcon downscale={0.75} color="var(--background)" />
              </Square>

              <Button
                pos="absolute"
                bottom={20}
                right={20}
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
          </Theme>
          <Separator vertical />

          <YStack $sm={{ display: 'none' }} width="40%">
            <ScrollView>
              {animationDescriptions.map((item, i) => {
                const isActive = item === animation
                return (
                  <Theme key={item.name} name={isActive ? null : 'alt2'}>
                    <YStack
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
                        setAnimationI(i)
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

            <XStack p="$4" ai="center" jc="$center">
              {Object.entries(animation.settings).map(([key, value]) => {
                return (
                  <React.Fragment key={key}>
                    <YStack>
                      <Paragraph size="$2" fow="800">
                        {key}
                      </Paragraph>
                      <Paragraph>{value}</Paragraph>
                    </YStack>
                    <Separator vertical mx={20} />
                  </React.Fragment>
                )
              })}
            </XStack>
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
