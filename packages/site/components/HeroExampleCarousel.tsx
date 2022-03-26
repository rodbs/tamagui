import { colorSchemes } from '@tamagui/theme-base'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button, H2, H3, Paragraph, Text, Theme, XStack, YStack } from 'tamagui'

import { Code, CodeInline } from './Code'
import { ContainerLarge } from './Container'
import { MediaPlayer } from './MediaPlayer'

const MediaPlayerDemo = ({ offset, index, ...props }: any) => {
  return (
    <YStack
      pos="absolute"
      top={0}
      left={0}
      zi={100 - index}
      px="$6"
      mb={-220}
      mr={-50}
      py="$4"
      className="faded-container"
      x={index * 40}
      y={index * 30}
      // opacity={(4 - index) / 3}
    >
      <MediaPlayer {...props} />
    </YStack>
  )
}

const MediaPlayerDemoStack = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [i, setI] = useState(0)

  return (
    <YStack
      pos="relative"
      width={400}
      height={80}
      onHoverIn={() => setIsHovering(true)}
      onHoverOut={() => setIsHovering(false)}
    >
      {[0, 1, 2, 3].map((demoIndex) => {
        return (
          <MediaPlayerDemo
            key={demoIndex}
            offset={i}
            index={demoIndex + i}
            {...(demoIndex && { alt: demoIndex })}
          />
        )
      })}
    </YStack>
  )
}

export function HeroExampleCarousel() {
  return (
    <YStack>
      <ContainerLarge position="relative">
        <YStack zi={1} space="$2">
          <H2 als="center">Truly flexible themes</H2>
          <H3 theme="alt2" als="center" fow="400">
            Unlimited sub-themes, down to the component.
          </H3>
        </YStack>

        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
        <XStack mb={220}>
          {[{ name: null }, ...colorSchemes.slice(2, 5)].map(({ name }, index) => {
            return (
              <Theme key={name} name={name}>
                <MediaPlayerDemoStack />
              </Theme>
            )
          })}
        </XStack>

        {/* </ScrollView> */}

        <YStack ai="center" als="center" maxWidth={480} space="$2">
          {/* <H4 size="$8">Nest sub-themes infinitely</H4> */}

          <Paragraph mb="$3" ta="center" size="$5">
            Dark, light, or [insert yours].
            <br />
            Sprinkle a few <span className="rainbow">color alts</span> for each.
            <br />
            Below that, add a <Text o={0.66}>few</Text> <Text o={0.5}>different</Text>{' '}
            <Text o={0.33}>shades</Text>.
            <br />
            At any level, customize <CodeInline size="$4">&lt;Button /&gt;</CodeInline> or{' '}
            <CodeInline size="$4">&lt;Input /&gt;</CodeInline>.
            <br />
            Nested themes - as easy as <CodeInline size="$4">dark_red_shade2_button</CodeInline>
          </Paragraph>

          <Link href="/docs/intro/themes" passHref>
            <Button theme="blue" tag="a">
              Theme Docs &raquo;
            </Button>
          </Link>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
}
