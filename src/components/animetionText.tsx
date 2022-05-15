// import {Transition} from 'react-transition-group'
import { useEffect, useState } from "react";
import { Transition } from 'react-transition-group';
import {scrollAnimetion} from './functions/animetion';



type propsType = {
  text: string
}
interface itemsType {
  pointElement:any
  textWrap:any
  innerText:any
}
const AnimetionText  = (props: propsType) => {
  const [isFlag, setIsFlag] = useState(false);
  
  useEffect(()=>{
    const items: itemsType = {
      pointElement: document.getElementById("header"),
      textWrap: document.getElementsByClassName("textWrap"),
      innerText: document.getElementsByClassName("innerText")
    }

    scrollAnimetion(items, setIsFlag)
    
  })
  return (
    <>
      {/* <Transition> */}
        <p className={isFlag? "text01 text02":"text01"} >
        <span className="innerText">{props.text}</span>
        </p>
      {/* </Transition> */}
    </>
  )
}

export default AnimetionText