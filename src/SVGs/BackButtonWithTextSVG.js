import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackButtonWithTextSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={53}
        height={22}
        fill="none"
        {...props}
    >
        <Path stroke="#000" strokeLinejoin="round" d="m16 16-5-5 5-5" />
        <Path
            fill="#000"
            d="M26.031 11.01H23.87l-.012-.908h1.963c.325 0 .608-.055.85-.165.242-.109.43-.265.562-.468a1.31 1.31 0 0 0 .206-.739c0-.312-.061-.566-.182-.761a1.005 1.005 0 0 0-.545-.434c-.242-.094-.55-.14-.926-.14h-1.664V15h-1.13V6.469h2.794c.438 0 .828.045 1.172.135.344.085.635.222.873.41.242.183.426.418.55.703.126.285.188.627.188 1.025 0 .352-.09.67-.27.955-.179.282-.429.512-.75.692-.316.18-.687.295-1.112.345l-.405.276ZM25.98 15h-2.555l.639-.92h1.916c.359 0 .664-.062.914-.187.253-.125.447-.301.58-.528.133-.23.199-.502.199-.814 0-.317-.057-.59-.17-.82a1.175 1.175 0 0 0-.533-.534c-.242-.125-.555-.187-.938-.187H24.42l.012-.908h2.203l.24.328c.41.035.758.152 1.043.351.285.196.502.446.65.75.153.305.229.64.229 1.008 0 .531-.117.98-.352 1.348-.23.363-.556.64-.978.832-.422.187-.918.281-1.488.281Zm8.062-1.084v-3.264c0-.25-.05-.466-.152-.65a.997.997 0 0 0-.446-.434 1.615 1.615 0 0 0-.738-.152c-.273 0-.514.047-.72.14a1.255 1.255 0 0 0-.481.37.809.809 0 0 0-.17.492H30.25c0-.227.059-.451.176-.674a1.97 1.97 0 0 1 .504-.603c.222-.184.488-.329.797-.434a3.14 3.14 0 0 1 1.043-.164c.46 0 .867.078 1.218.234.356.157.633.393.832.71.203.312.305.704.305 1.177v2.953c0 .211.018.436.053.674.039.238.095.443.17.615V15h-1.131a2.022 2.022 0 0 1-.13-.498 4.011 4.011 0 0 1-.046-.586Zm.188-2.76.011.762h-1.096c-.308 0-.584.025-.826.076-.242.047-.445.12-.609.217a1.03 1.03 0 0 0-.375.37.978.978 0 0 0-.129.509c0 .2.045.38.135.545.09.164.224.295.404.392.184.094.408.141.674.141.332 0 .625-.07.879-.211.254-.14.455-.313.603-.516.153-.203.235-.4.247-.591l.462.521a1.575 1.575 0 0 1-.222.545 2.607 2.607 0 0 1-1.202 1.025 2.328 2.328 0 0 1-.925.176c-.43 0-.807-.084-1.131-.252a1.933 1.933 0 0 1-.75-.674 1.784 1.784 0 0 1-.264-.955c0-.34.067-.638.2-.896a1.73 1.73 0 0 1 .574-.65c.25-.176.55-.31.902-.399.352-.09.744-.135 1.178-.135h1.26Zm5.138 3.07c.258 0 .496-.052.715-.158.219-.105.398-.25.54-.433.14-.188.22-.4.24-.639h1.03c-.019.375-.146.725-.38 1.049a2.6 2.6 0 0 1-.909.78 2.636 2.636 0 0 1-1.236.292c-.476 0-.892-.084-1.248-.252a2.473 2.473 0 0 1-.879-.691 3.088 3.088 0 0 1-.521-1.008 4.252 4.252 0 0 1-.17-1.213v-.246c0-.426.056-.828.17-1.207a3.08 3.08 0 0 1 .521-1.014c.235-.293.528-.523.88-.691.355-.168.77-.252 1.247-.252.496 0 .93.102 1.301.305.371.199.662.472.873.82.215.344.332.734.352 1.172H40.86a1.56 1.56 0 0 0-.222-.71 1.388 1.388 0 0 0-.516-.503 1.44 1.44 0 0 0-.756-.193c-.332 0-.611.066-.838.199-.222.129-.4.305-.533.527a2.46 2.46 0 0 0-.281.733 4.034 4.034 0 0 0-.082.814v.246c0 .277.027.55.082.82.054.27.146.514.275.733.133.219.31.394.533.527.227.13.508.194.844.194ZM44.201 6v9h-1.09V6h1.09Zm3.873 2.66-2.765 2.96-1.547 1.605-.088-1.155 1.107-1.324L46.75 8.66h1.324Zm-.99 6.34-2.262-3.023.563-.967L48.36 15h-1.277Z"
        />
    </Svg>
)
export default BackButtonWithTextSVG;
