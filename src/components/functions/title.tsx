import styled from 'styled-components';

type propsType ={
  title:string
  hoge:boolean
}
const Title = (props:propsType) => {
  console.log(props.hoge)
  return(
    <>
    <MainTitle>{props.title}</MainTitle>
    </>
  )
}

export default Title

type styleType = {
  hoge?:boolean
}

const MainTitle = styled.h1<styleType>`
color: ${(props) => props.hoge? "red": "pink"};
border: 1px solid #000
`
