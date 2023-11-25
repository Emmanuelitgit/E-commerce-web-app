import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/cart';

const Container = styled.div`
    // padding: 20px;
    // display:grid;
    // grid-template-columns:1fr 1fr 1fr;
`;

const Products = ({dataValue}) => {


  // const[products, setProducts] = useState();
  
  // useEffect(()=>{
  //   const fetchAllData = async()=>{
  //     try{
  //       const res = await axios.get(`http://localhost:8000/products`);
  //       setProducts(res.data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   fetchAllData()
  // }, []);

  const products = useSelector((state)=>state.cart.products);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchData())
  }, [dispatch])


  return (
    <Container>
     {dataValue? <div className='products'>
      {dataValue.map((item) => (
        <Product
        id={item.id} 
        title={item.title}
        price={item.price}
        img={item.img} 
        key={item.id}/>
      ))}
     </div> : <div className='products'>
     {products?.map((item) => (
        <Product
        id={item.id}  
        title={item.title}
        price={item.price}
        img={item.img} 
        key={item.id} />
      ))}
      </div>}
    </Container>
  );
};

export default Products;