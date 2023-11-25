import React from 'react';
import styled from 'styled-components';
import { mobile } from "../Responsive";
import {Star, StarHalf,  } from '@material-ui/icons';

const Container = styled.div`
  flex: 1;
  margin: 30px;
  height: 67vh;
  position: relative;
  cursor:pointer;
`;

const Image = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover
  ${mobile({ height: "50vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    &:hover{
      color: white;
      background-color: #192a56;
      border-radius: 5px;
    }
`;

const StarContainer = styled.div`
display:flex;
align-items:center;
jsutify-content:center;
margin-top:-36%;
margin-left:22%;
cursor:pointer;
`

const HalfStarContainer = styled.div`
display:flex;
align-items:center;
jsutify-content:center;
cursor:pointer;
`
const Love = styled.img`
position:absolute;
top:0;
left:0;
right:0;
width:100%;
`
const FullStar = styled.div``

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Love src={item.Love}/>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      <StarContainer>
      <FullStar>
      <Star style={{color:"#192a56", fontSize:"33px"}}/>
      <Star style={{color:"#192a56", fontSize:"33px"}}/>
      <Star style={{color:"#192a56", fontSize:"33px"}}/>
      </FullStar>
      <HalfStarContainer>
      <StarHalf style={{color:"#192a56", fontSize:"33px"}}/>
      <StarHalf style={{color:"#192a56", fontSize:"33px"}}/>
      </HalfStarContainer>
      </StarContainer>
    </Container>
  );
};

export default CategoryItem;