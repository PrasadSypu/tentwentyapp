import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlayButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M8 5.998a.433.433 0 0 1-.042.186.39.39 0 0 1-.114.142L.57 11.928a.341.341 0 0 1-.375.028.38.38 0 0 1-.143-.148A.43.43 0 0 1 0 11.6V.397A.43.43 0 0 1 .053.188.38.38 0 0 1 .196.041.335.335 0 0 1 .56.069L7.833 5.67c.05.036.091.084.12.141.03.058.046.122.047.187Z"
    />
  </Svg>
)
export default React.memo(PlayButton);
