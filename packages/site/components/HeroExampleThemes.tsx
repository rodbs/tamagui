import Link from 'next/link'
import { useState } from 'react'
import {
  Button,
  Circle,
  H2,
  H3,
  InteractiveContainer,
  Paragraph,
  Spacer,
  Text,
  Theme,
  XStack,
  YStack,
  useTheme,
  useThemeName,
} from 'tamagui'

import { CodeInline } from './Code'
import { ContainerLarge } from './Container'
import { MediaPlayer } from './MediaPlayer'

const MediaPlayerDemoStack = () => {
  const themeName = useThemeName()
  const activeBase = themeName === 'dark' ? 1 : 0
  const themes = ['alt1', 'alt2', 'alt3']
  const [active, setActive] = useState(0)

  return (
    <YStack ai="center" jc="center" space="$6">
      <XStack space="$6">
        <InteractiveContainer br="$10" als="center">
          {['light', 'dark'].map((name, i) => {
            return (
              <Button
                // onPress={() => setActive(i)}
                theme={activeBase === i ? 'active' : null}
                key={i}
                borderRadius="$0"
                fontWeight={activeBase === i ? '700' : '400'}
              >
                {name}
              </Button>
            )
          })}
        </InteractiveContainer>

        <XStack ai="center" space="$1">
          {['green', 'pink', 'red', 'orange', 'blue'].map((color) => {
            return (
              <Theme key={color} name={color}>
                <Circle size={20} backgroundColor="$colorMid" />
              </Theme>
            )
          })}
        </XStack>

        <InteractiveContainer br="$10" als="center">
          {themes.map((name, i) => {
            return (
              <Button
                onPress={() => setActive(i)}
                theme={active === i ? 'active' : null}
                key={i}
                borderRadius="$0"
                fontWeight={active === i ? '700' : '400'}
              >
                {name}
              </Button>
            )
          })}
        </InteractiveContainer>
      </XStack>

      <XStack space="$6">
        <MediaPlayer alt={active ? active : null} />
        <Theme name="green">
          <MediaPlayer alt={active ? active : null} />
        </Theme>
        <Theme name="pink">
          <MediaPlayer alt={active ? active : null} />
        </Theme>
      </XStack>

      <Theme name="green">
        <CodeInline my="$2" br="$3" size="$6">
          dark_green_alt1_button
        </CodeInline>
      </Theme>
    </YStack>
  )
}

export function HeroExampleCarousel() {
  return (
    <YStack>
      <ContainerLarge space="$3" position="relative">
        <YStack zi={1} space="$2">
          <H2 als="center">Truly flexible themes</H2>
          <H3 theme="alt2" als="center" fow="400">
            Unlimited sub-themes, down to the component.
          </H3>
        </YStack>

        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
        <MediaPlayerDemoStack />
        {/* </ScrollView> */}

        <YStack mt="$3" ai="center" als="center" maxWidth={480} space="$2">
          {/* <H4 size="$8">Nest sub-themes infinitely</H4> */}
          {/* 
          <Paragraph mb="$3" ta="center" size="$5">
            Dark, light, or [insert yours].
            <br />
            Sprinkle a few <span className="rainbow">color alts</span> for each.
            <br />
            For each color, a <Text o={0.66}>few</Text> <Text o={0.5}>different</Text>{' '}
            <Text o={0.33}>shades</Text>.
            <br />
            For each of those a custom <CodeInline size="$4">&lt;Button /&gt;</CodeInline>.
          </Paragraph> */}

          <Link href="/docs/intro/themes" passHref>
            <Button theme="blue" tag="a">
              Learn how themes work &raquo;
            </Button>
          </Link>
        </YStack>
      </ContainerLarge>
    </YStack>
  )
}
