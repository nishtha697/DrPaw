import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
const GoToMapButtonSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={94}
        height={22}
        fill="none"
        {...props}
    >
        <Path
            fill="#000"
            d="M9.348 6.469h1.095l2.795 6.955 2.79-6.955h1.1L13.66 15h-.855L9.348 6.469Zm-.358 0h.967l.158 5.203V15H8.99V6.469Zm7.524 0h.966V15h-1.125v-3.328l.159-5.203Zm6.527 7.447v-3.264c0-.25-.05-.466-.152-.65a.997.997 0 0 0-.446-.434 1.615 1.615 0 0 0-.738-.152c-.273 0-.514.047-.72.14a1.255 1.255 0 0 0-.481.37.809.809 0 0 0-.17.492H19.25c0-.227.059-.451.176-.674a1.97 1.97 0 0 1 .504-.603c.222-.184.488-.329.797-.434a3.14 3.14 0 0 1 1.043-.164c.46 0 .867.078 1.218.234.356.157.633.393.832.71.203.312.305.704.305 1.177v2.953c0 .211.018.436.053.674.039.238.095.443.17.615V15h-1.131a2.022 2.022 0 0 1-.13-.498 4.011 4.011 0 0 1-.046-.586Zm.188-2.76.011.762h-1.095c-.31 0-.584.025-.827.076-.242.047-.445.12-.609.217a1.03 1.03 0 0 0-.375.37.978.978 0 0 0-.129.509c0 .2.045.38.135.545.09.164.224.295.404.392.184.094.408.141.674.141.332 0 .625-.07.879-.211.254-.14.455-.313.603-.516.153-.203.235-.4.247-.591l.462.521a1.575 1.575 0 0 1-.222.545 2.607 2.607 0 0 1-1.201 1.025 2.328 2.328 0 0 1-.926.176c-.43 0-.807-.084-1.131-.252a1.933 1.933 0 0 1-.75-.674 1.784 1.784 0 0 1-.264-.955c0-.34.067-.638.2-.896a1.73 1.73 0 0 1 .574-.65c.25-.176.55-.31.902-.399.352-.09.744-.135 1.178-.135h1.26Zm3.685-1.277v7.559h-1.09V8.66h.996l.094 1.219Zm4.271 1.898v.123c0 .461-.054.89-.163 1.284-.11.39-.27.73-.481 1.02-.207.288-.463.513-.768.673-.304.16-.654.24-1.048.24-.403 0-.758-.066-1.067-.199a2.104 2.104 0 0 1-.785-.58 2.964 2.964 0 0 1-.516-.914 5.29 5.29 0 0 1-.257-1.201v-.657c.046-.468.134-.888.263-1.26a3.14 3.14 0 0 1 .51-.949c.215-.265.475-.466.78-.603.304-.14.656-.211 1.054-.211s.752.078 1.06.234c.31.153.569.371.78.657.21.285.369.627.474 1.025.11.395.165.834.165 1.318Zm-1.09.123v-.123c0-.316-.032-.613-.099-.89a2.25 2.25 0 0 0-.31-.739 1.48 1.48 0 0 0-.528-.503 1.5 1.5 0 0 0-.767-.188c-.274 0-.512.047-.715.14-.2.094-.37.221-.51.382-.14.156-.256.336-.346.539-.086.199-.15.406-.193.62v1.518c.078.274.188.531.328.774a1.7 1.7 0 0 0 .563.58c.234.144.529.217.884.217.293 0 .545-.061.756-.182a1.53 1.53 0 0 0 .527-.51c.141-.215.245-.46.311-.738.067-.281.1-.58.1-.897Zm8.368 1.805 2.514-7.236H42.2L39.043 15h-.873l.293-1.295Zm-2.35-7.236 2.49 7.236.311 1.295h-.873l-3.152-8.531h1.224Zm9.446 8.648c-.442 0-.842-.074-1.202-.223a2.723 2.723 0 0 1-.92-.638 2.841 2.841 0 0 1-.585-.973 3.566 3.566 0 0 1-.205-1.23v-.246c0-.516.076-.975.228-1.377.152-.407.36-.75.621-1.032a2.66 2.66 0 0 1 .89-.638 2.558 2.558 0 0 1 1.032-.217c.453 0 .844.078 1.172.234.332.157.603.375.814.657.211.277.367.605.469.984.102.375.152.785.152 1.23v.487h-4.734v-.885h3.65v-.082a2.701 2.701 0 0 0-.175-.82 1.474 1.474 0 0 0-.47-.657c-.214-.171-.507-.257-.878-.257a1.475 1.475 0 0 0-1.213.615 2.3 2.3 0 0 0-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.21.492.37.69.164.2.36.356.591.47.235.113.5.17.797.17.383 0 .707-.079.973-.235.265-.156.498-.365.697-.627l.656.522c-.136.207-.31.404-.521.591a2.49 2.49 0 0 1-.78.457 3.017 3.017 0 0 1-1.083.176Zm4.816-5.46V15h-1.084V8.66h1.055l.029.996Zm1.98-1.032-.005 1.008a1.565 1.565 0 0 0-.258-.035 2.738 2.738 0 0 0-.27-.012c-.25 0-.47.039-.662.117a1.373 1.373 0 0 0-.486.328c-.133.14-.239.309-.317.504a2.425 2.425 0 0 0-.146.633l-.305.176c0-.383.037-.742.112-1.078.078-.336.197-.633.357-.891a1.75 1.75 0 0 1 .61-.61 1.713 1.713 0 0 1 1.16-.193.8.8 0 0 1 .21.053Zm4.694 4.693c0-.156-.035-.3-.106-.433-.066-.137-.205-.26-.416-.37-.207-.113-.52-.21-.937-.292a7.449 7.449 0 0 1-.955-.264 2.894 2.894 0 0 1-.72-.37 1.549 1.549 0 0 1-.452-.509 1.421 1.421 0 0 1-.158-.685c0-.25.054-.487.164-.71a1.9 1.9 0 0 1 .474-.591c.207-.172.455-.307.745-.405.289-.097.61-.146.966-.146.508 0 .942.09 1.301.27.36.18.635.42.826.72.192.297.287.627.287.99h-1.084a.93.93 0 0 0-.158-.51 1.168 1.168 0 0 0-.451-.415 1.456 1.456 0 0 0-.72-.164c-.302 0-.546.046-.733.14a.94.94 0 0 0-.404.346.87.87 0 0 0-.065.762c.043.09.117.173.223.252.105.074.254.144.445.21.191.067.436.133.732.2.52.117.948.258 1.284.422.336.164.586.365.75.603.164.238.246.527.246.867a1.689 1.689 0 0 1-.674 1.36 2.474 2.474 0 0 1-.774.386c-.296.09-.63.135-1.001.135-.559 0-1.032-.1-1.418-.299-.387-.199-.68-.457-.88-.773a1.85 1.85 0 0 1-.298-1.002h1.09c.015.297.101.533.258.709.156.172.347.295.574.37.226.07.45.105.674.105.297 0 .544-.04.744-.118.203-.078.357-.185.463-.322a.747.747 0 0 0 .158-.469Zm3.685-4.658V15h-1.09V8.66h1.09ZM59.562 6.98c0-.176.053-.325.159-.446.11-.12.27-.181.48-.181.207 0 .365.06.475.181.113.121.17.27.17.446a.613.613 0 0 1-.17.433c-.11.117-.268.176-.475.176-.21 0-.37-.059-.48-.176a.638.638 0 0 1-.158-.433Zm2.626 4.921v-.134c0-.457.066-.881.199-1.272.133-.394.324-.736.574-1.025.25-.293.553-.52.908-.68a2.82 2.82 0 0 1 1.195-.246c.446 0 .846.082 1.202.246.359.16.664.387.914.68.254.289.447.63.58 1.025.133.39.199.815.199 1.272v.134c0 .457-.066.881-.2 1.272-.132.39-.325.732-.58 1.025-.25.29-.552.516-.907.68-.352.16-.75.24-1.196.24-.445 0-.845-.08-1.201-.24a2.72 2.72 0 0 1-.914-.68 3.098 3.098 0 0 1-.574-1.025c-.133-.39-.2-.815-.2-1.272Zm1.084-.134v.134c0 .317.037.616.11.897.075.277.186.523.335.738.152.215.342.385.568.51.227.121.49.182.791.182.297 0 .557-.061.78-.182.226-.125.413-.295.562-.51.148-.215.26-.46.334-.738.078-.281.117-.58.117-.897v-.134a3.25 3.25 0 0 0-.117-.885 2.28 2.28 0 0 0-.34-.744 1.615 1.615 0 0 0-.562-.516 1.578 1.578 0 0 0-.785-.187c-.297 0-.56.062-.786.187-.222.125-.41.297-.562.516-.149.215-.26.463-.334.744a3.41 3.41 0 0 0-.111.885Zm7.13-1.752V15h-1.084V8.66h1.026l.058 1.354Zm-.258 1.576-.45-.018c.003-.433.068-.834.193-1.2.125-.372.3-.694.527-.968a2.349 2.349 0 0 1 1.858-.861c.312 0 .593.043.843.129.25.082.463.215.639.398.18.184.316.422.41.715.094.29.14.643.14 1.06V15h-1.09v-4.166c0-.332-.048-.598-.146-.797a.901.901 0 0 0-.427-.44 1.535 1.535 0 0 0-.692-.14c-.27 0-.515.057-.738.17-.219.113-.408.27-.568.469-.157.199-.28.427-.37.685a2.507 2.507 0 0 0-.129.809Z"
        />
        <Path stroke="#000" strokeLinejoin="round" d="m82 6 5 5-5 5" />
        <Rect width={93} height={21} x={0.5} y={0.5} stroke="#000" rx={3.5} />
    </Svg>
)
export default GoToMapButtonSVG;
