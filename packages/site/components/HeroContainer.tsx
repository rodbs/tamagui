import React from 'react'
import { Theme, XStack, YStack, styled } from 'tamagui'

export function HeroContainer({
  children,
  demoMultiple,
  smaller,
}: {
  demoMultiple?: boolean
  children?: React.ReactNode
  smaller?: boolean
}) {
  return (
    <YStack
      className="hero-gradient hero-scroll"
      mt="$2"
      mb="$4"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={50}
      minHeight={380}
      borderRadius="$4"
      $gtMd={{
        mx: smaller ? 0 : '$-4',
      }}
    >
      {demoMultiple ? (
        <XStack maxHeight="100%" maxWidth="100%" justifyContent="flex-start">
          <XStack space="$6" px="$8">
            <Theme name="dark">
              <Card>{children}</Card>
            </Theme>
            <Theme name="light">
              <Card>{children}</Card>
            </Theme>
            <Theme name="blue">
              <Card>{children}</Card>
            </Theme>
            <Theme name="red">
              <Card>{children}</Card>
            </Theme>
            <Theme name="pink">
              <Card>{children}</Card>
            </Theme>
            <Theme name="orange">
              <Card>{children}</Card>
            </Theme>
            <Theme name="green">
              <Card>{children}</Card>
            </Theme>
            <Theme name="yellow">
              <Card>{children}</Card>
            </Theme>
          </XStack>
        </XStack>
      ) : (
        children
      )}
    </YStack>
  )
}

const Card = styled(YStack, {
  ai: 'center',
  jc: 'center',
  elevation: '$6',
  minWidth: 180,
  bc: '$background',
  minHeight: 220,
  br: '$4',
})
