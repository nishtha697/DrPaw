import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DropdownSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={9}
        height={5}
        fill="none"
        {...props}
    >
        <Path fill="#222" d="M.542.417 4.5 4.375 8.458.417H.542Z" />
    </Svg>
)
export default DropdownSVG;
