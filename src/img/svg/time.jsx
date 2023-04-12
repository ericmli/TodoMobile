import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SvgTime(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#clip0_264_25)"
        stroke="#4A3780"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10 18.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z" />
        <Path d="M10 5v5l3.333 1.667" />
      </G>
      <Defs>
        <ClipPath id="clip0_264_25">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgTime
