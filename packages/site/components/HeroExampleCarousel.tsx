import { colorSchemes } from '@tamagui/theme-base'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import {
  Button,
  H2,
  H3,
  InteractiveContainer,
  Paragraph,
  Text,
  Theme,
  XStack,
  YStack,
  useTheme,
  useThemeName,
} from 'tamagui'

import { Code, CodeInline } from './Code'
import { useTint } from './ColorToggleButton'
import { ContainerLarge } from './Container'
import { MediaPlayer } from './MediaPlayer'

const MediaPlayerDemo = ({ offset, index, ...props }: any) => {
  return (
    <YStack zi={100 - index}>
      <MediaPlayer {...props} />
    </YStack>
  )
}

const MediaPlayerDemoStack = ({ name }: any) => {
  const themeName = useThemeName()
  const themes = [name ?? themeName, 'alt1', 'alt2', 'alt3']
  const [active, setActive] = useState(0)

  return (
    <Theme name={name}>
      <YStack ai="center" jc="center" space>
        <InteractiveContainer>
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

        <Theme name={active == 0 ? null : themes[active]}>
          <MediaPlayerDemo />
        </Theme>
      </YStack>
    </Theme>
  )
}

export function HeroExampleCarousel() {
  return (
    <YStack>
      <ContainerLarge space="$6" position="relative">
        <YStack zi={1} space="$2">
          <H2 als="center">Truly flexible themes</H2>
          <H3 theme="alt2" als="center" fow="400">
            Unlimited sub-themes, down to the component.
          </H3>
        </YStack>

        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
        <XStack space="$6">
          {[{ name: null }, ...colorSchemes.slice(2, 5)].map(({ name }, index) => {
            return <MediaPlayerDemoStack key={name} name={name} />
          })}
        </XStack>
        {/* </ScrollView> */}

        <YStack mt="$3" ai="center" als="center" maxWidth={480} space="$2">
          {/* <H4 size="$8">Nest sub-themes infinitely</H4> */}

          <Paragraph mb="$3" ta="center" size="$5">
            Dark, light, or [insert yours].
            <br />
            Sprinkle a few <span className="rainbow">color alts</span> for each.
            <br />
            For each color, a <Text o={0.66}>few</Text> <Text o={0.5}>different</Text>{' '}
            <Text o={0.33}>shades</Text>.
            <br />
            For each of those a custom <CodeInline size="$4">&lt;Button /&gt;</CodeInline>.
          </Paragraph>

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
