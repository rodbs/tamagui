import React, { useState } from 'react'
import { Button } from 'tamagui'

export default function AnimationsDemo() {
  const [scale, setScale] = useState(1)

  return (
    <Button scale={scale} animation="bouncy" onPress={() => setScale(2)}>
      Hello World
    </Button>
  )
}
