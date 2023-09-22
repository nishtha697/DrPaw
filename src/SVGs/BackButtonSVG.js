import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackButtonSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            fillOpacity={0.7}
            fillRule="evenodd"
            d="M16.707 3.293a1 1 0 0 0-1.414 0l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414-1.414L9.414 12l7.293-7.293a1 1 0 0 0 0-1.414Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default BackButtonSVG;
