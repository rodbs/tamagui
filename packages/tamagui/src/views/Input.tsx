import { GetProps, styled } from '@tamagui/core'
import { TextInput } from 'react-native'

import { inputSizeVariant } from '../helpers/inputHelpers'

export const Input = styled(TextInput, {
  name: 'Input',
  borderRadius: '$3',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  paddingVertical: '$2',
  paddingHorizontal: '$2',

  hoverStyle: {
    borderColor: '$borderColorHover',
  },

  focusStyle: {
    borderColor: '$borderColorFocus',
  },

  variants: {
    size: {
      '...size': inputSizeVariant,
    },
  },
})

export type InputProps = GetProps<typeof Input>

// fixes flex bug:
// <XStack space="$1">
//   <Input flex={1} size="$1" placeholder="Size 1..." />
//   <Button size="$1">Go</Button>
// </XStack>
// ...(isWeb && {
// flex: 1,
// width: '0%',
// }),
