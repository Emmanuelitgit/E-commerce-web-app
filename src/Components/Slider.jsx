import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import{ ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { mobile } from '../Responsive';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin-left:80px;
  margin-top:90px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  color:#192a56;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color:#192a56;
`;

const Button = styled.button`
  padding: 7px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  color:#192a56;
  height:6vh;
  &:hover{
    background-color:#192a56;
    color: white;
    border-radius: 3px;
  }
`;


const Slider = () => {

  const dispatch = useDispatch();

  const[slider, setSlider] = useState([]);

  useEffect(()=>{
    const fetchAllData = async()=>{
      try{
        const res = await axios.get("http://localhost:8000/slider")
        setSlider(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllData()
  }, []);
  
  console.log(slider[0])

  const handleAddToCart = () => {
		dispatch(cartActions.addToCart({
      
    }))
	}


  const [slideIndex, setSlideIndex] = useState(0);
  
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slider.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={require(`../${item.img}`)}/>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={handleAddToCart}>ADD TO CART</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;