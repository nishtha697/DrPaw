import * as React from "react"
import Svg, { Path } from "react-native-svg"
const VetClinicsMarkerSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            fill="#BB2A2A"
            d="M7 0a6.972 6.972 0 0 0-4.947 2.074A7.116 7.116 0 0 0 0 7.072c0 6.05 6.364 10.62 6.635 10.812a.632.632 0 0 0 .73 0C7.636 17.692 14 13.123 14 7.07a7.116 7.116 0 0 0-2.053-4.997A6.972 6.972 0 0 0 7 0Zm0 4.5c.503 0 .996.15 1.414.433.419.283.745.685.938 1.154A2.596 2.596 0 0 1 8.8 8.89a2.522 2.522 0 0 1-2.774.557A2.551 2.551 0 0 1 4.884 8.5 2.59 2.59 0 0 1 5.2 5.253 2.532 2.532 0 0 1 7 4.5Z"
        />
    </Svg>
)
export default VetClinicsMarkerSVG;
