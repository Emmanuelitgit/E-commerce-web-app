import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../Responsive";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: black;
      border-radius: 10px;
      color: white;
  }
`;

const Product = () => {

  const[product, setProduct] = useState([])
  const location = useLocation();

 const postId = location.pathname.split("/")[2]
 
  useEffect(()=>{
    const fetchData = async () => {
     try{
         const res = await axios.get(`http://localhost:8000/products/${postId}`);
         setProduct(res.data);
     }catch(err){
         console.log(err);
     }
    }
    fetchData();
 }, [postId]);


const productQuantity = useSelector((state)=>state.cart.singleQuantity)

const dispatch = useDispatch()

const handleAddToCart =()=>{
  dispatch(cartActions.addToCart({
    title:product.title,
    id:product.id,
    img:product.img,
    price:product.price,
    quantity:productQuantity
  }))
};



 
  return (
    <Container>
      <Navbar />
        <Wrapper>
        <ImgContainer>
        {/* <Image src={require(`../${product?.img}`)} /> */}
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
           {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            {/* <AmountContainer>
              <Remove onClick={handleDecrease}/>
              <Amount>{productQuantity}</Amount>
              <Add onClick={handleIncrease} />
            </AmountContainer> */}
        <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;