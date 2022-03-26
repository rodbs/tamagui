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

const themes = [
  ['light', 'dark'],
  ['green', 'pink', 'red', 'orange', 'blue'],
  ['base', 'alt1', 'alt2', 'alt3'],
] as const

const themeCombos: string[] = []
for (let i = 0; i < themes[0].length; i++) {
  for (let j = 0; j < themes[1].length; j++) {
    for (let k = 0; k < themes[2].length; k++) {
      themeCombos.push(`${themes[0][i]}_${themes[1][j]}_${themes[2][k]}`)
    }
  }
}

const MediaPlayerDemoStack = () => {
  const themeName = useThemeName()
  const activeBase = themeName === 'dark' ? 1 : 0
  const [activeI, setActiveI] = useState([1, 1, 0])
  const activeThemeComboI =
    activeI[0] * themes[0].length + activeI[1] * themes[1].length + activeI[2] * themes[2].length

  return (
    <YStack ai="center" jc="center" space="$6">
      <XStack space="$6">
        <InteractiveContainer br="$10" als="center">
          {themes[0].map((name, i) => {
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
          {themes[1].map((color) => {
            return (
              <Theme key={color} name={color}>
                <Circle size={20} backgroundColor="$colorMid" />
              </Theme>
            )
          })}
        </XStack>

        <InteractiveContainer br="$10" als="center">
          {themes[2].map((name, i) => {
            const isActive = activeI[2] === i
            return (
              <Button
                onPress={() => setActiveI((x) => [x[0], x[1], i])}
                theme={isActive ? 'active' : null}
                key={i}
                borderRadius="$0"
                fontWeight={isActive ? '700' : '400'}
              >
                {name}
              </Button>
            )
          })}
        </InteractiveContainer>
      </XStack>

      <XStack space="$6">
        {themeCombos.map((name, i) => {
          const isActive = activeThemeComboI === i
          const isBeforeActive = i < activeThemeComboI
          const [base, color, alt] = name.split('_')
          return (
            <XStack key={name} zi={isActive ? 1000 : isBeforeActive ? i : 1000 - i} mx={-175}>
              <Theme name={base}>
                <Theme name={color}>
                  <MediaPlayer alt={+alt.replace('alt', '')} />
                </Theme>
              </Theme>
            </XStack>
          )
        })}
        {/* <MediaPlayer alt={activeI ? activeI : null} />
        <Theme name="green">
          <MediaPlayer alt={activeI ? activeI : null} />
        </Theme>
        <Theme name="pink">
          <MediaPlayer alt={activeI ? activeI : null} />
        </Theme> */}
      </XStack>

      <Theme name="green">
        <CodeInline my="$2" br="$3" size="$6">
          dark_green_alt1_button
        </CodeInline>
      </Theme>
    </YStack>
  )
}
