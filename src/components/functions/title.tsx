import styled from 'styled-components';

type propsType ={
  title:string
}
const Title = (props:propsType) => {
  return(
    <>
    <MainTitle>Title</MainTitle>
    </>
  )
}

type styleType = {
  hoge?:boolean
}
const MainTitle = styled.h1<styleType>`
color: tomato;
border: 1px solid #000
font-size:${(props) => props.hoge? "30rem": "50rem"}
`
MainTitle.defaultProps = {
  hoge: false,
}

export default Title