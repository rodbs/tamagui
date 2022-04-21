// debug

import { Paragraph } from 'tamagui'

const x = (
  <Paragraph theme="alt1" size="$2">
    tamagui.dev
  </Paragraph>
)

// // debug-verbose
// import { ChevronLeft, ChevronRight, Lock } from '@tamagui/feather-icons'
// import React, { memo, useRef, useState } from 'react'
// import {
//   Button,
//   Card,
//   Circle,
//   H2,
//   H4,
//   Image,
//   Paragraph,
//   ParagraphProps,
//   SizableText,
//   Spacer,
//   Stack,
//   Text,
//   Theme,
//   VisuallyHidden,
//   XStack,
//   YStack,
//   YStackProps,
// } from 'tamagui'

// import Tamagui from './tamagui.config'

// React['keep']

// // type y = ParagraphProps['size']
// // const x = <SizableText size="$1" />
// // const x2 = <Paragraph size="$1" />

// export const Sandbox = () => {
//   const [theme, setTheme] = useState('light' as any)
//   return (
//     <Tamagui.Provider injectCSS defaultTheme="light">
//       <Theme name={theme}>
//         <div style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}>
//           <a
//             style={{ marginBottom: 20 }}
//             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//           >
//             Switch theme
//           </a>
//           <Test />
//         </div>
//       </Theme>
//     </Tamagui.Provider>
//   )
// }

// export const Test = (props) => {
//   const ref = useRef()

//   return (
//     <>
//       <VisuallyHidden>something</VisuallyHidden>

//       <Button
//         ref={ref as any}
//         onPress={props.onOpen}
//         // className="all ease-in ms100"
//         jc="flex-start"
//         borderWidth={0.5}
//         textAlign="left"
//         elevation="$1"
//         color="$colorTranslucent"
//         hoverStyle={{
//           elevation: '$4',
//         }}
//         {...props}
//         borderRadius={1000}
//       />

//       <YStack ai="center" als="center" jc="center" maw={580} space="$4">
//         <Paragraph theme="alt2" ta="center" size="$6">
//           Tamagui themes are fully typed based on your custom tokens, compiling into clean atomic
//           CSS that avoids deep re-renders.
//         </Paragraph>
//         <XStack>
//           {/* no space here */}
//           <Button tag="a" fontFamily="$silkscreen">
//             How themes work &raquo;
//           </Button>
//         </XStack>
//       </YStack>

//       <Card
//         space="$2"
//         tag="a"
//         href="https://twitter.com/tamagui_js"
//         target="_blank"
//         rel="noopener noreferrer"
//         p="$4"
//       >
//         <svg
//           width="30"
//           height="31"
//           viewBox="0 0 30 31"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g clipPath="url(#clip0)">
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M28.9993 6.50637C27.9673 6.9667 26.8601 7.27923 25.6985 7.4186C26.8851 6.70064 27.796 5.56035 28.2222 4.20468C27.1108 4.87196 25.8823 5.35341 24.5745 5.61525C23.5258 4.48764 22.0341 3.78235 20.3795 3.78235C17.2082 3.78235 14.6343 6.38389 14.6343 9.58936C14.6343 10.0455 14.6845 10.4889 14.7848 10.9113C10.009 10.6705 5.77634 8.35616 2.94345 4.84239C2.45041 5.69972 2.16629 6.69641 2.16629 7.76068C2.16629 9.77519 3.18162 11.5532 4.72341 12.5921C3.78329 12.5626 2.89749 12.3007 2.12033 11.8657C2.12033 11.8911 2.12033 11.9122 2.12033 11.9375C2.12033 14.7502 4.10084 17.0984 6.729 17.6305C6.24849 17.7614 5.73874 17.8332 5.21645 17.8332C4.84458 17.8332 4.48525 17.7952 4.13427 17.7276C4.86547 20.0335 6.98805 21.7144 9.49921 21.7609C7.53123 23.3193 5.05768 24.2484 2.36267 24.2484C1.89888 24.2484 1.44344 24.2188 0.992188 24.1681C3.5326 25.8152 6.55351 26.7781 9.80005 26.7781C20.367 26.7781 26.1456 17.9303 26.1456 10.2566C26.1456 10.0032 26.1414 9.75407 26.1289 9.5049C27.2528 8.68558 28.2264 7.66355 28.9952 6.49792L28.9993 6.50637Z"
//               fill="#1d9bf0"
//             />
//           </g>
//           <defs>
//             <clipPath id="clip0">
//               <rect width="28" height="23" fill="white" transform="translate(1 3.78235)" />
//             </clipPath>
//           </defs>
//         </svg>
//         <H4 cursor="pointer" fontFamily="$silkscreen">
//           Twitter
//         </H4>
//         <Paragraph cursor="pointer" theme="alt2">
//           For news, announcements, and general updates.
//         </Paragraph>
//       </Card>
//     </>
//   )
// }

// //

// //      <AnimationTest />

// // export const Card = styled(YStack, {
// //   name: 'Card',
// //   className: 'transition all ease-in ms100',
// //   borderRadius: '$2',
// //   backgroundColor: '$background',
// //   flexShrink: 1,
// //   elevation: '$2',
// //   hoverStyle: {
// //     backgroundColor: '$color',
// //     elevation: '$4',
// //     y: -4,
// //   },
// // })

// // const AnimationTest = () => {
// //   const [positionI, setPositionI] = useState(0)
// //   const position = positions[positionI]
// //   const next = (to = 1) => {
// //     setPositionI((x) => {
// //       return (x + to) % positions.length
// //     })
// //   }

// //   return (
// //     <>
// //       <Square
// //         animation="bouncy"
// //         debug
// //         elevation="$4"
// //         size={110}
// //         bc="red"
// //         br="$9"
// //         hoverStyle={{
// //           scale: 1.1,
// //         }}
// //         pressStyle={{
// //           scale: 0.9,
// //         }}
// //         {...position}
// //         onPress={() => next()}
// //       />

// //       <Button pos="absolute" bottom={20} left={20} size="$6" circular onPress={() => next()} />
// //     </>
// //   )
// // }

// // export const positions = [
// //   {
// //     x: 0,
// //     y: 0,
// //     scale: 1,
// //     rotate: '0deg',
// //   },
// //   {
// //     x: -50,
// //     y: -50,
// //     scale: 0.5,
// //     rotate: '-45deg',
// //     hoverStyle: {
// //       scale: 0.6,
// //       x: -85,
// //       y: -85,
// //     },
// //     pressStyle: {
// //       scale: 0.4,
// //     },
// //   },
// //   {
// //     x: 50,
// //     y: 50,
// //     scale: 1,
// //     rotate: '180deg',
// //     hoverStyle: {
// //       scale: 1,
// //     },
// //     pressStyle: {
// //       scale: 1,
// //     },
// //   },
// // ]
