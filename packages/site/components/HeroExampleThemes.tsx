import Link from 'next/link'
import { useState } from 'react'
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
} from 'tamagui'

import { CodeInline } from './Code'
import { ContainerLarge } from './Container'
import { MediaPlayer } from './MediaPlayer'

const MediaPlayerDemoStack = () => {
  const themes = ['base', 'alt1', 'alt2', 'alt3']
  const [active, setActive] = useState(0)

  return (
    <YStack ai="center" jc="center" space="$5">
      <InteractiveContainer als="center">
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

      <XStack space="$6">
        <MediaPlayer alt={active ? active : null} />
        <Theme name="green">
          <MediaPlayer alt={active ? active : null} />
        </Theme>
        <Theme name="pink">
          <MediaPlayer alt={active ? active : null} />
        </Theme>
      </XStack>
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
