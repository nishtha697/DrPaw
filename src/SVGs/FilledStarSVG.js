import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FilledStarSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={14}
        fill="none"
        {...props}
    >
        <Path
            fill="#FFD759"
            fillRule="evenodd"
            d="M7.09.573 5.025 5.127.063 5.72 3.755 9.09l-.97 4.905 4.346-2.472 4.364 2.438-1.007-4.896 3.667-3.4-4.969-.555L7.09.573Z"
            clipRule="evenodd"
        />
        <Path
            fill="#FABD3B"
            fillRule="evenodd"
            d="m3.755 9.09 3.354-1.807L.063 5.72 3.755 9.09ZM2.785 13.995l4.346-2.472 4.364 2.438-4.386-6.677-4.324 6.71Z"
            clipRule="evenodd"
        />
        <Path
            fill="#FABD3B"
            fillRule="evenodd"
            d="m7.108 7.283 3.38 1.782 3.666-3.4-7.046 1.618ZM7.088.573l.02 6.71L9.184 5.11 7.088.573Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default FilledStarSVG;
