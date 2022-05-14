// import {Transition} from 'react-transition-group'
import { useEffect } from "react";


type propsType = {
  text: string
}
const AnimetionText  = (props: propsType) => {
  return (
    <>
      <p id="test">
        「
        {/* <Transition> */}
        {props.text}
        {/* </Transition>」 */}
        」
      </p>
    </>
  )
}

export default AnimetionText