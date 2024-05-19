import * as React from "react"
import Svg, { G, Rect, Path, Mask, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={73}
      height={77}
      viewBox="0 0 73 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_0_308)">
        <Rect x={2} y={2} width={69} height={69} rx={24} fill="#fff" />
      </G>
      <Path
        d="M60.066 6a21.762 21.762 0 014.455 3.692 22.236 22.236 0 013.273 4.63l.237.454c1.94 3.796 2.97 7.966 2.97 16.856v9.971l-.006 1.044c-.082 8.52-1.19 12.493-3.2 16.266-1.74 3.262-4.154 5.94-7.166 7.957"
        stroke="#F1DE02"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M67 12.918a21.748 21.748 0 00-3.68-4.456 22.165 22.165 0 00-4.615-3.273l-.452-.237c-3.784-1.939-7.94-2.969-16.8-2.969h-9.94l-1.04.005c-8.491.082-12.451 1.19-16.212 3.2-3.251 1.74-5.92 4.154-7.93 7.166"
        stroke="#009639"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.48 9.663a22.166 22.166 0 00-3.274 4.615l-.237.452C3.029 18.514 2 22.67 2 31.53v9.94l.005 1.04c.082 8.492 1.19 12.452 3.2 16.212 1.74 3.251 4.554 5.921 7.566 7.93"
        stroke="#F40000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.993 64.504a22.161 22.161 0 004.615 3.274l.453.237c3.783 1.938 7.94 2.968 16.8 2.968H41.8l1.04-.005c8.492-.082 12.452-1.19 16.212-3.2.58-.31 1.14-.641 1.681-.993 2.5-1.625 4.398-3.697 6.05-6.173"
        stroke="#FF8300"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M67.794 58.939c-1.738 3.251-4.153 5.92-7.165 7.93"
        stroke="#FFCF08"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={29}
        y={40}
        width={15}
        height={16}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.009 40.99h14.799v14.799h-14.8v-14.8z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.408 52.998c2.727 0 4.609-1.776 4.609-4.334V43.78h-9.218v4.884c0 2.558 1.882 4.334 4.61 4.334zm0 2.79c-4.165 0-7.4-3.044-7.4-7.124V40.99h14.8v7.674c0 4.08-3.235 7.125-7.4 7.125z"
          fill="#1D1D1B"
        />
      </G>
      <Mask
        id="b"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={29}
        y={17}
        width={15}
        height={15}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.008 17.1h14.8v14.672h-14.8V17.1z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.408 19.89c-2.727 0-4.609 1.776-4.609 4.334v4.757h9.218v-4.757c0-2.558-1.882-4.334-4.61-4.334zm0-2.79c4.165 0 7.4 3.044 7.4 7.124v7.548h-14.8v-7.548c0-4.08 3.235-7.124 7.4-7.124z"
          fill="#1D1D1B"
        />
      </G>
      <Mask
        id="c"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={17}
        y={28}
        width={15}
        height={16}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 28.981h14.8v14.8H17v-14.8z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#c)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.79 36.38c0 2.728 1.777 4.61 4.335 4.61h4.884v-9.218h-4.884c-2.558 0-4.334 1.881-4.334 4.609zm-2.79 0c0-4.164 3.044-7.399 7.125-7.399h7.674v14.8h-7.674c-4.08 0-7.125-3.235-7.125-7.4z"
          fill="#1D1D1B"
        />
      </G>
      <Mask
        id="d"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={41}
        y={28}
        width={15}
        height={16}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.017 28.981h14.8v14.8h-14.8v-14.8z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#d)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.026 36.38c0-2.727-1.777-4.608-4.335-4.608h-4.883v9.218h4.883c2.558 0 4.335-1.882 4.335-4.61zm2.79 0c0 4.166-3.044 7.4-7.125 7.4h-7.674V28.981h7.674c4.08 0 7.125 3.235 7.125 7.4z"
          fill="#1D1D1B"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.026 36.38c0-2.727-1.777-4.608-4.335-4.608h-4.883v9.218h4.883c2.558 0 4.334-1.882 4.334-4.61z"
        fill="#F1DE02"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.408 19.89c-2.727 0-4.609 1.776-4.609 4.334v4.757h9.218v-4.757c0-2.558-1.882-4.334-4.61-4.334z"
        fill="#009639"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.408 52.998c2.727 0 4.609-1.776 4.609-4.334V43.78h-9.218v4.884c0 2.558 1.882 4.334 4.61 4.334z"
        fill="#FF8300"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.79 36.381c0 2.727 1.777 4.609 4.335 4.609h4.883v-9.218h-4.883c-2.558 0-4.334 1.881-4.334 4.609z"
        fill="#F40000"
      />
      <Defs></Defs>
    </Svg>
  )
}

export default SvgComponent
