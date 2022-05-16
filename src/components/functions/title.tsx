import styled from 'styled-components';

type propsType ={
  title:string
  hoge:boolean
}
const Title = (props:propsType) => {
  
  return(
    <>
     <MainTitle hoge={props.hoge} size="50px">{props.title}</MainTitle>
    </>
  )
}

export default Title

type styleType = {
  hoge?:boolean
  size?:string
}

const MainTitle = styled.h1<styleType>`
color: ${(props) => props.hoge? "red": "pink"};
font-size: ${(props) => props.size};
border: 1px solid #000;
`

MainTitle.defaultProps = {
  hoge: false,
  size: "10px"
};
