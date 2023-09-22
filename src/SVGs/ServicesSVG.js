import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <G clipPath="url(#a)">
            <Path
                fill="#222"
                fillRule="evenodd"
                d="M6.25 11.25a8.75 8.75 0 1 1 17.5 0v1.294a4.377 4.377 0 0 1 3.75 4.331v.313a4.063 4.063 0 0 1-4.165 4.06c-.925 2.65-3.277 4.436-5.816 4.888-.588.215-1.283.114-1.894.114a1.875 1.875 0 1 1 0-3.75h1.25a1.875 1.875 0 0 1 1.509.761c1.62-.771 2.866-2.4 2.866-4.511v-7.5a6.25 6.25 0 0 0-12.5 0v7.813a2.187 2.187 0 0 1-2.188 2.187A4.062 4.062 0 0 1 2.5 17.187v-.312a4.375 4.375 0 0 1 3.75-4.331V11.25Zm0 3.856A1.876 1.876 0 0 0 5 16.875v.313c0 .756.537 1.387 1.25 1.53v-3.612Zm17.5 0v3.613A1.564 1.564 0 0 0 25 17.187v-.312a1.875 1.875 0 0 0-1.25-1.769Z"
                clipRule="evenodd"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h30v30H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
export default SvgComponent
