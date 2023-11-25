import { ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { cartActions } from '../store/cart';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { fetchData } from '../store/cart';


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  width:80%;
  height: 370px;
  display: flex;
  margin-left:10%;
  margin-bottom:10%;
  margin-top:10%;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.5);
  }
`;



const Product = ({ id,title,price,img }) => {
  const dispatch = useDispatch()

  const addToCart = () => {
		dispatch(cartActions.addToCart({
      id,
      title,
      price,
      img
    }))
	}

  const {currentUser} = useContext(AuthContext)

  return (
    <Container>
      <Link className='imglink' to={`/product/${id}`}>
    <Circle />
      <Image src={require(`../${img}`)} />
      <Info>
        {currentUser? 
        (<Link to="/">
        <Icon onClick={addToCart}>
          <ShoppingCartOutlined />
        </Icon>
        </Link>)
        :
        (<Link to="/login">
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        </Link>)
        }
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Link>
    </Container>
  );
};

export default Product;