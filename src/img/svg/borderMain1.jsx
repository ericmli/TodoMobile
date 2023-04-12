import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgBorder1(props) {
  return (
    <Svg
      width={151}
      height={144}
      viewBox="0 0 151 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={-10}
        cy={171}
        r={109}
        stroke="url(#paint0_linear_1_2371)"
        strokeOpacity={0.17}
        strokeWidth={44}
        opacity={0.7}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_2371"
          x1={-20}
          y1={3.57628e-7}
          x2={-26}
          y2={202}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.0001} stopColor="#fff" stopOpacity={0.97} />
          <Stop offset={0.0002} stopColor="#fff" stopOpacity={0.77} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgBorder1
