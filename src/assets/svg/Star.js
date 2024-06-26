import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent({ isActive, ...props }) {
  return (
    <Svg
      width={24}
      height={22}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.49 9.81c-.967-.81-.407-2.355.841-2.427l6.162-.417c.356-.025.688-.246.84-.589L10.677.86C10.931.294 11.466 0 12 0c.535 0 1.07.294 1.324.859l2.342 5.518c.128.32.46.54.841.589l6.162.417c1.247.073 1.808 1.619.84 2.427l-4.838 3.803a.957.957 0 00-.33.956l1.45 5.739a1.379 1.379 0 01-2.087 1.472l-5.271-3.115a.954.954 0 00-1.019 0l-5.22 3.115c-.229.147-.51.22-.764.22-.84 0-1.604-.76-1.35-1.692l1.452-5.74c.076-.342-.026-.71-.332-.932L.49 9.811z"
        fill={isActive ? "#1D1E1C" : "lightgray"}
      />
    </Svg>
  )
}

export default SvgComponent
