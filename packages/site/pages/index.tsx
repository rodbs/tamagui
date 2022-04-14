import { Community } from '@components/Community'
import { FeaturesGrid } from '@components/FeaturesGrid'
import { Hero } from '@components/Hero'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { useMemo } from 'react'
import { Image, Separator, XStack, YStack } from 'tamagui'

import { useTint } from '../components/ColorToggleButton'
import { ContainerLarge } from '../components/Container'
import { HeaderFloating } from '../components/HeaderFloating'
import { HeroBelow } from '../components/HeroBelow'
import { HeroExampleAnimations } from '../components/HeroExampleAnimations'
import { HeroExampleCode } from '../components/HeroExampleCode'
import { HeroExampleProps } from '../components/HeroExampleProps'
import { HeroExampleThemes } from '../components/HeroExampleThemes'
import { HeroPerformance } from '../components/HeroPerformance'
import { HeroResponsive } from '../components/HeroResponsive'
import { HeroTypography } from '../components/HeroTypography'
import { InstallInput } from '../components/InstallInput'
import { MediaPlayer } from '../components/MediaPlayer'
import { SearchButton } from '../components/Search'
import { ThemeTint } from '../components/ThemeTint'

export default function Home() {
  // return <MediaPlayer />

  return (
    <>
      <TitleAndMetaTags title="Tamagui — React Native + Web UI kit" />
      <HeaderFloating isHome />
      <Hero />
      <XStack zi={100} theme="alt1" mt={-28} ai="center" jc="center">
        <SearchButton color="$color" width={350} size="$6">
          Search Docs...
        </SearchButton>
      </XStack>
      <YStack py="$7" pb="$11">
        <HeroBelow />
      </YStack>
      <Separator />
      <ContainerLarge zi={100}>
        <XStack mt={-28} mb="$-4" jc="center" ai="center">
          <InstallInput />
        </XStack>
      </ContainerLarge>
      <Section extraPad gradient>
        <YStack fullscreen className="bg-dot-grid mask-gradient-down" />
        <HeroExampleThemes />
      </Section>
      <Section>
        <HeroResponsive />
      </Section>
      <SectionTinted gradient>
        <HeroPerformance />
      </SectionTinted>
      <Section>
        <YStack fullscreen className="bg-dot-grid mask-gradient-down" />
        <HeroExampleCode />
      </Section>
      <SectionTinted gradient>
        <HeroExampleAnimations />
      </SectionTinted>
      <Section>
        <HeroTypography />
      </Section>
      <SectionTinted gradient>
        <HeroExampleProps />
      </SectionTinted>
      <Section>
        <FeaturesGrid />
      </Section>
      <Community />
    </>
  )
}

const Section = ({ children, below, className }: any) => {
  return (
    <YStack
      className={className}
      contain="paint"
      pos="relative"
      ov="hidden"
      py="$12"
      zi={below ? 0 : 1}
    >
      {children}
    </YStack>
  )
}

const SectionTinted = ({ children, gradient, extraPad, ...props }: any) => {
  const { tint } = useTint()
  const childrenMemo = useMemo(() => children, [children])
  const className = gradient ? `gradient-${tint}` : ''
  return (
    <YStack contain="paint" pos="relative" py={extraPad ? '$12' : '$11'} {...props}>
      <YStack
        fullscreen
        className={className}
        // o={0.85}
        zi={-1}
        // @ts-ignore
        // bc={`$${tint}1`}
        btw={0.5}
        bbw={0.5}
        // @ts-ignore
        boc={`$${tint}3`}
      />
      {childrenMemo}
    </YStack>
  )
}
