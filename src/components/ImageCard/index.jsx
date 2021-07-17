import React,{useEffect, useState}from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton'



const Title = styled.span`
font-family:${(props) => props.theme.fonts.regula};
color:${(props) => props.theme.colors.background};
font-size:16px;
`

const Card = styled.div`
display:flex;
justify-content:center;
padding:10px;
width:90px;
height:90px;
background-image: url(${(props) => props.photo});
background-size:cover;
border-radius:6px; 
`

const ImageCard = ({photo,title}) => {
   const[imageLoaded,setImageLoaded] = useState(false);
   
    useEffect(()=> {
        const imageLoader = new Image();
        imageLoaded.src=photo;
        imageLoaded.onload = () => setImageLoaded(true)
   },[photo])
   
    return(
        <>
        {imageLoaded ? (
             <Card photo={photo}>
             <Title>{title}</Title>
         </Card>
        ) : <Skeleton width = '90px' height = '90px' />}
       
        </>
    )
}

export default ImageCard;