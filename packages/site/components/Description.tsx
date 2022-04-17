import { H3 } from 'tamagui'

export const Description = ({ children, ...props }) => {
  // takes the text even if it's wrapped in `<p>`
  // https://github.com/wooorm/xdm/issues/47
  const childText = typeof children === 'string' ? children : children.props.children
  return (
    <H3 size="$7" theme="alt1" fontWeight="300" tag="p" mb="$2" mt="$0" {...props}>
      {childText}
    </H3>
  )
}
