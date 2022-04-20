// debug
// import React from 'react'
// import { H3, H4, Paragraph, Text, YStack, useMedia } from 'tamagui'

// export function Hero() {
//   return <H4 size="$1">Input</H4>
// }

import { ArrowRight } from '@tamagui/feather-icons'
import NextLink from 'next/link'
import { memo } from 'react'
import {
  Button,
  Heading,
  Paragraph,
  Spacer,
  Text,
  Theme,
  Tooltip,
  VisuallyHidden,
  XStack,
  YStack,
} from 'tamagui'

import { useTint } from './ColorToggleButton'
import { ContainerLarge } from './Container'
import { DiscordIcon } from './DiscordIcon'
import { GithubIcon } from './GithubIcon'
import { Header } from './Header'

export function Hero() {
  const { tint } = useTint()

  return (
    <YStack pos="relative">
      <Theme name={tint}>
        <YStack fullscreen zi={0} className="hero-gradient-2" opacity={1} />
        <HeroTop />
      </Theme>
    </YStack>
  )
}

const HeroTop = memo(() => {
  return (
    <ContainerLarge pos="relative">
      {/* casuing hydration mismatch... */}
      {/* <img
        src={require('../public/tamaguy2.png').default.src}
        style={{
          position: 'absolute',
          bottom: -270,
          left: -10,
          transform: 'scale(0.125)',
          width: 544,
          height: 569,
        }}
      /> */}
      {/* <Image
        className="tamaguy"
        pos="absolute"
        bottom={-250}
        left={-50}
        // not merging at compile time right
        // x={-500}
        // y={200}
        scale={0.2}
        src={require('../public/tamaguy2.png').default.src}
        width={544}
        height={569}
      /> */}

      <YStack
        className="bg-grid mask-gradient-up"
        fullscreen
        left={-1000}
        right={-1000}
        opacity={0.4}
      />

      <Header />

      <YStack
        space="$6"
        position="relative"
        pt="$8"
        $sm={{
          maxWidth: 500,
          mx: 'auto',
        }}
      >
        <YStack ai="flex-start" $gtSm={{ ai: 'center' }} space="$5">
          <Heading
            size="$9"
            $gtSm={{
              size: '$11',
              ta: 'center',
            }}
            $gtMd={{
              size: '$12',
              maxWidth: 900,
              mx: '$4',
            }}
          >
            <Tooltip contents="Works the same on iOS, Android, and web">
              <span className="universal">
                <span className="rainbow clip-text help">Universal</span>
              </span>
            </Tooltip>{' '}
            design systems for React&nbsp;Native&nbsp;&&nbsp;Web, faster
          </Heading>

          <YStack
            px={0}
            maxWidth={550}
            $gtSm={{
              px: 100,
              maxWidth: 900,
            }}
            $gtMd={{
              px: 90,
            }}
          >
            <Paragraph
              debug
              color="$gray10"
              // opacity={0.5}
              size="$5"
              letterSpacing={0}
              fontFamily="$silkscreen"
              $gtSm={{
                ta: 'center',
                size: '$6',
                maxWidth: 500,
                letterSpacing: 0,
                fontWeight: '400',
              }}
              $gtMd={{
                size: '$8',
                maxWidth: 900,
                fontWeight: '400',
              }}
            >
              Write&nbsp;once,&nbsp;run&nbsp;everywhere thanks to an optimizing compiler. 🔼 perf
              with 🔽 code.
            </Paragraph>
          </YStack>
        </YStack>

        <XStack ai="center" jc="center" space="$2">
          <NextLink href="/docs/intro/introduction" passHref>
            <Button
              fontFamily="$silkscreen"
              borderRadius={1000}
              iconAfter={ArrowRight}
              tag="a"
              size="$6"
              fontWeight="800"
            >
              Get started
            </Button>
          </NextLink>

          <NextLink href="https://github.com/tamagui/tamagui" passHref>
            <YStack p="$2" opacity={0.65} hoverStyle={{ opacity: 1 }} tag="a" target="_blank">
              <VisuallyHidden>
                <Text>Github</Text>
              </VisuallyHidden>
              <GithubIcon width={23} />
            </YStack>
          </NextLink>

          <NextLink href="https://discord.gg/4qh6tdcVDa" passHref>
            <YStack
              p="$2"
              $sm={{ height: 0, width: 0, overflow: 'hidden', mx: -18 }}
              opacity={0.65}
              hoverStyle={{ opacity: 1 }}
              tag="a"
              target="_blank"
            >
              <VisuallyHidden>
                <Text>Discord</Text>
              </VisuallyHidden>
              <DiscordIcon plain width={23} />
            </YStack>
          </NextLink>
        </XStack>
      </YStack>

      <Spacer size="$10" />
    </ContainerLarge>
  )
})
