import * as React from 'react'
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg'

function SvgCheck(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G clipPath='url(#clip0_264_66)'>
        <Rect width={24} height={24} rx={3} fill='#4A3780' />
        <G clipPath='url(#clip1_264_66)'>
          <Path
            d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414 4.95 4.95z'
            fill='#fff'
          />
        </G>
      </G>
      <Rect x={0.5} y={0.5} width={23} height={23} rx={2.5} stroke='#4A3780' />
      <Defs>
        <ClipPath id='clip0_264_66'>
          <Rect width={24} height={24} rx={3} fill='#fff' />
        </ClipPath>
        <ClipPath id='clip1_264_66'>
          <Path fill='#fff' d='M0 0H24V24H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgCheck
