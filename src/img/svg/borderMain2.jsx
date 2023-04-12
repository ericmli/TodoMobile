import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgBorder2(props) {
  return (
    <Svg
      width={63}
      height={118}
      viewBox="0 0 63 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={70}
        cy={45.5}
        r={55}
        stroke="url(#paint0_linear_1_2372)"
        strokeOpacity={0.17}
        strokeWidth={35}
        opacity={0.7}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_2372"
          x1={72.5}
          y1={-27}
          x2={72.5}
          y2={118}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgBorder2
