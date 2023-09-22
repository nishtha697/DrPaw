import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CurrentLocationMarkerSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={36}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            d="M14 0a13.945 13.945 0 0 0-9.895 4.147A14.232 14.232 0 0 0 0 14.143c0 12.102 12.727 21.242 13.27 21.624a1.263 1.263 0 0 0 1.46 0C15.273 35.385 28 26.245 28 14.143a14.232 14.232 0 0 0-4.105-9.996A13.945 13.945 0 0 0 14 0Zm0 9c1.007 0 1.991.302 2.828.867a5.131 5.131 0 0 1 1.875 2.308c.386.94.486 1.974.29 2.971A5.159 5.159 0 0 1 17.6 17.78a5.076 5.076 0 0 1-2.607 1.407 5.043 5.043 0 0 1-2.941-.293A5.102 5.102 0 0 1 9.767 17a5.18 5.18 0 0 1 .633-6.494A5.065 5.065 0 0 1 14 9Z"
        />
    </Svg>
)
export default CurrentLocationMarkerSVG;
