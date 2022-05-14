import {Transition} from 'react-transition-group'


type propsType = {
  text: string
}

const AnimetionText  = (props: propsType) => {
  return (
    <>
      <p>「
        {/* <Transition> */}
        {props.text}
        {/* </Transition>」 */}
      </p>
    </>
  )
}



export default AnimetionText