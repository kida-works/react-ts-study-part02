// import {Transition} from 'react-transition-group'
import { useEffect, useState } from "react";
import { Transition } from 'react-transition-group';



type propsType = {
  text: string
}
const AnimetionText  = (props: propsType) => {
  return (
    <>
      {/* <Transition> */}
        <p className="text" >
        <span id="text">{props.text}</span>
        </p>
      {/* </Transition> */}
    </>
  )
}

export default AnimetionText