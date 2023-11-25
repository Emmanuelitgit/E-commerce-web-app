import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import { mobile } from "../Responsive";
import axios from 'axios';
import { Link } from 'react-router-dom';


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  cursor: pointer;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {

  const[color, setColor] = useState("Color");
  const[dataValue, setDataValue] = useState([]);

  const handleChange = (e)=>{
   setColor(e.target.value)
  }
console.log(color)

  useEffect(()=>{
    const fetchAllData = async()=>{
      try{
        const res = await axios.get(color === "Color"? 
          `http://localhost:8000/products` 
        : `http://localhost:8000/products?color=${color}`)
        setDataValue(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllData()
  }, [color]);



  return (
    <Container>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
         <Select name="color" value={color.color} onChange={handleChange}>
            <Option disabled selected >
              Color
            </Option>
            <Option value="White">White</Option>
            <Option value="Black">Black</Option>
            <Option value="Red">Red</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Yellow">Yellow</Option>
            <Option value="Green">Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products dataValue={dataValue}/>
    </Container>
  );
};

export default ProductList;