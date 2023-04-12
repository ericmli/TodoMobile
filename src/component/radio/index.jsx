import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

const RadioButton = ({ onPress, img, a }) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onPress={onPress}
    >
      <Image source={img} />
    </TouchableOpacity>
  )
}

export default RadioButton
