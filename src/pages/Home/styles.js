import Slider from 'react-slick'
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 36vw;
  height: 100vh;
  overflow-y: scroll;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background-color: #fdffff;
`;

export const Logo = styled.img`
  margin-bottom: 16px;
`;

export const Carousel = styled(Slider)`
.slick-slide{
  margin-right:36px;
}
`

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color:${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight:bold;
  line-height: 29px;
  margin:16px 0;
`

export const MapFake = styled.div`
background-color: red;
width:100%;
text-align:center;
`

export const ModalTitle = styled.p`
margin-bottom:10px;
letter-spacing:0.11px;
font-family:${(props)=>props.theme.fonts.regular};
color:${(props)=> props.theme.colors.text};
text-transform:none;
line-height:29px;
font-size:24px;
font-weight:bold;
`

export const ModalContent= styled.p`
margin-bottom:10px;
font-family:${(props)=>props.theme.fonts.regular};
color:${(props)=> props.theme.colors.text};
font-weight:normal;
line-height:19px;
font-size:16px;
`