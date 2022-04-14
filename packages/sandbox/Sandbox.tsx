// debug 1232
import { useState } from 'react'
import { Button, Card, Paragraph, Theme, XStack, YStack } from 'tamagui'

import Tamagui from './tamagui.config'

export const Sandbox = () => {
  const [theme, setTheme] = useState('light' as any)
  return (
    <Tamagui.Provider injectCSS defaultTheme="light">
      <Theme name={theme}>
        <YStack w="100%" h="100%" bc="$background" p="$5" space="$5">
          <a onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch theme</a>
          <Test />
        </YStack>
      </Theme>
    </Tamagui.Provider>
  )
}

export const Test = (props) => {
  const isScrolled = false
  return (
    <>
      <XStack
        className="ease-out all ms200"
        y={isScrolled ? -1 : -60}
        py={0}
        bbw={1}
        bbc="$borderColor"
        zi={1000}
        // @ts-ignore
        pos="fixed"
        top={0}
        left={0}
        right={0}
        bc="$backgroundHover"
        elevation="$2"
      />
    </>
  )
}

// <Button borderRadius={1000} tag="a" fontWeight="800">
// Documentation
// </Button>

// <Card
// size="$6"
// overflow="visible"
// bordered
// pointerEvents={props.pointerEvents}
// debug
// pl={0}
// pr={0}
// pb={0}
// pt={0}
// ai="stretch"
// >
// hello world
// </Card>

// const AnimationTest = () => {
//   const [positionI, setPositionI] = useState(0)
//   const position = positions[positionI]
//   const next = (to = 1) => {
//     setPositionI((x) => {
//       return (x + to) % positions.length
//     })
//   }

//   return (
//     <>
//       <Square
//         animation="bouncy"
//         debug
//         elevation="$4"
//         size={110}
//         bc="red"
//         br="$9"
//         hoverStyle={{
//           scale: 1.1,
//         }}
//         pressStyle={{
//           scale: 0.9,
//         }}
//         {...position}
//         onPress={() => next()}
//       />

//       <Button pos="absolute" bottom={20} left={20} size="$6" circular onPress={() => next()} />
//     </>
//   )
// }

// export const positions = [
//   {
//     x: 0,
//     y: 0,
//     scale: 1,
//     rotate: '0deg',
//   },
//   {
//     x: -50,
//     y: -50,
//     scale: 0.5,
//     rotate: '-45deg',
//     hoverStyle: {
//       scale: 0.6,
//       x: -85,
//       y: -85,
//     },
//     pressStyle: {
//       scale: 0.4,
//     },
//   },
//   {
//     x: 50,
//     y: 50,
//     scale: 1,
//     rotate: '180deg',
//     hoverStyle: {
//       scale: 1,
//     },
//     pressStyle: {
//       scale: 1,
//     },
//   },
// ]
