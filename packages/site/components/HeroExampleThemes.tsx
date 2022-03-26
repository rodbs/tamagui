import { useTheme } from '@components/NextTheme'
import Link from 'next/link'
import { useState } from 'react'
import {
  Button,
  Circle,
  H2,
  H3,
  InteractiveContainer,
  Theme,
  XStack,
  YStack,
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
  ['green', 'pink', 'red', 'orange', 'blue'],
  ['base', 'alt1', 'alt2', 'alt3'],
] as const

const themeCombos: string[] = []
for (let i = 0; i < themes[0].length; i++) {
  for (let j = 0; j < themes[1].length; j++) {
    themeCombos.push(`${themes[0][i]}_${themes[1][j]}`)
  }
}

const ActiveCircle = ({ isActive, ...props }) => {
  return (
    <YStack
      br="$10"
      borderWidth={2}
      borderColor="transparent"
      my={-1}
      {...(!!isActive && {
        borderColor: '$color',
      })}
      {...(!isActive && {
        hoverStyle: {
          borderColor: '$borderColor',
        },
      })}
    >
      <Circle size={20} backgroundColor="$background" {...props} />
    </YStack>
  )
}

const MediaPlayerDemoStack = () => {
  const { theme, setTheme } = useTheme()
  const [activeI, setActiveI] = useState([0, 0])
  const activeThemeComboI = activeI[0] * themes[0].length + activeI[1] * themes[1].length
  const themeName = useThemeName()
  const colorName = themes[activeI[0]]
  const altName = themes[activeI[1]]

  return (
    <YStack ai="center" jc="center" space="$6">
      <XStack space="$6">
        <InteractiveContainer p="$1" br="$10" als="center" space="$1">
          {['light', 'dark'].map((name, i) => {
            const selected = i === 0 ? 'light' : 'dark'
            const isActive = theme === selected
            return (
              <Theme name={selected}>
                <ActiveCircle onPress={() => setTheme(selected)} isActive={isActive} />
              </Theme>
            )
          })}
        </InteractiveContainer>

        <InteractiveContainer p="$1" br="$10" als="center" space="$1">
          {themes[0].map((color, i) => {
            const isActive = activeI[0] === i
            return (
              <Theme key={color} name={color}>
                <ActiveCircle
                  onPress={() => setActiveI((x) => [i, x[1]])}
                  isActive={isActive}
                  backgroundColor="$colorMid"
                />
              </Theme>
            )
          })}
        </InteractiveContainer>

        <InteractiveContainer p="$1" br="$10" als="center" space="$1">
          {themes[1].map((name, i) => {
            const isActive = activeI[1] === i
            return (
              <ActiveCircle
                onPress={() => setActiveI((x) => [x[0], i])}
                key={i}
                isActive={isActive}
                backgroundColor={i == 0 ? 'transparent' : `rgba(150,150,150,${(4 - i) / 4})`}
              />
            )
          })}
        </InteractiveContainer>
      </XStack>

      <XStack space="$6" pos="relative" height={220}>
        {themeCombos.map((name, i) => {
          const isActive = activeThemeComboI === i
          const isBeforeActive = i < activeThemeComboI
          const [color, alt] = name.split('_')
          return (
            <XStack
              key={name}
              zi={isActive ? 1000 : isBeforeActive ? i : 1000 - i}
              pos="absolute"
              x={i * 30}
            >
              <Theme name={color}>
                <MediaPlayer alt={+alt.replace('alt', '')} />
              </Theme>
            </XStack>
          )
        })}
      </XStack>

      <Theme name="green">
        <CodeInline my="$2" br="$3" size="$6">
          {themeName}_{colorName}_{altName}_button
        </CodeInline>
      </Theme>
    </YStack>
  )
}
