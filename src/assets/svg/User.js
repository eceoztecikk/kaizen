import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={20} cy={20} r={20} fill="#1D1E1C" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.762 15.127C23.762 12.757 22.077 11 20 11s-3.762 1.757-3.762 4.127 1.684 4.294 3.762 4.294c2.078 0 3.763-1.923 3.763-4.294zm4.192 10.566l-.38-1.72c-.472-2.13-2.466-3.557-4.618-3.304a25.31 25.31 0 01-5.912 0c-2.153-.253-4.147 1.174-4.618 3.305l-.38 1.719A1.888 1.888 0 0013.881 28h12.236c.138 0 .275-.015.41-.045a1.895 1.895 0 001.427-2.262z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
