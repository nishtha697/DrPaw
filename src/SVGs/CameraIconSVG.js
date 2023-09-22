import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"
const CameraIconSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
        fill="none"
        {...props}
    >
        <Circle cx={30} cy={30} r={30} fill="#3B71FE" />
        <G fill="#fff" clipPath="url(#a)">
            <Path d="M35.73 31.146a5.73 5.73 0 1 1-11.46 0 5.73 5.73 0 0 1 11.46 0Z" />
            <Path d="M16.25 20.834a4.583 4.583 0 0 0-4.583 4.583v13.75a4.583 4.583 0 0 0 4.583 4.583h27.5a4.583 4.583 0 0 0 4.583-4.583v-13.75a4.583 4.583 0 0 0-4.583-4.583h-2.686a4.583 4.583 0 0 1-3.24-1.343l-1.898-1.898a4.583 4.583 0 0 0-3.24-1.343h-5.372a4.584 4.584 0 0 0-3.24 1.343l-1.898 1.898a4.583 4.583 0 0 1-3.24 1.343H16.25Zm1.146 4.583a1.146 1.146 0 1 1 0-2.291 1.146 1.146 0 0 1 0 2.291Zm20.625 5.73a8.021 8.021 0 1 1-16.042-.001 8.021 8.021 0 0 1 16.042 0Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M11.667 11.667h36.667v36.667H11.667z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default CameraIconSVG;
