import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SearchIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={28}
        fill="none"
        {...props}
    >
        <Rect width={36} height={28} fill="#000" rx={4} />
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M22.136 18.997a7.567 7.567 0 1 1 .882-.886l3.632 3.633-.884.884-3.63-3.63Zm1.414-5.764a6.317 6.317 0 1 1-12.633 0 6.317 6.317 0 0 1 12.633 0Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default SearchIcon;
