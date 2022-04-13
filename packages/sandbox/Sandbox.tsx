// debug 123
import { useState } from 'react'
import { Button, Theme, Title, Tooltip, YStack, styled } from 'tamagui'

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

export const Test = () => {
  return (
    <YStack ai="flex-start" $gtSm={{ ai: 'center' }} space="$5">
      <SearchButton color="$color" width={350} size="$6">
        Search Docs...
      </SearchButton>
    </YStack>
  )
}

export const SearchButton = (props: any) => {
  const x = (
    <Button
      debug
      ref={undefined as any}
      // className="all ease-in ms100"
      jc="flex-start"
      borderWidth={1}
      textAlign="left"
      elevation="$1"
      color="$colorTranslucent"
      hoverStyle={{
        elevation: '$4',
      }}
      {...props}
      borderRadius={1000}
    />
  )

  console.log('1234123', x)

  return x
}

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
