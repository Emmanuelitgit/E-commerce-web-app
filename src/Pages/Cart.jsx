import React from 'react';
import styled from 'styled-components';
import{ Add, Remove} from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart';


const Container = styled.div`
margin-top:10%;
margin-bottom:10%;
`
const Wrapper = styled.div
`display:flex;
 justify-content:space-around;
 align-items:center;
 border:0.2px solid gray;
 border-radius:5px;
 margin:10px
 
`
const Image = styled.img
`width:200px;
height:200px;
`
const Details = styled.div``
const ProductQuantity = styled.div``
const IncButton = styled.button`
outline:none;
border:none;
background-color:#192a56;
color:white;
border-radius:2px;
cursor:pointer;
width:25px;
height:25px;
`
const DecButton = styled.button`
outline:none;
border:none;
background-color:red;
color:white;
border-radius:2px;
cursor:pointer;
width:25px;
height:25px;
`
const Title = styled.p`
color:#192a56;
`
const Price = styled.p`
color:#192a56;
`
const Size = styled.p`
color:#192a56;
`
const Quantity = styled.p`
font-size:25px;
font-weight:500;
color:#192a56;
`

function Cart({id, title, img, price, quantity, totalPrice}) {

	const dispatch = useDispatch();

	const incrementCartItem =()=>{
		dispatch(cartActions.addToCart({
			id,
			title,
			price,
			img,
		}))
	}

	const removeFromCart =()=>{
		dispatch(cartActions.removeFromCart(id))
	}

  return (
  <Container>
	<Wrapper>
		<Image src={require(`../${img}`)}/>
		<Details>
			<Title><b>Product:</b> {title}</Title>
			<Price><b>Unit Price:</b> Ghc{price}</Price>
			<Price><b>Total Price:</b> Ghc{totalPrice}</Price>
			<Size><b>Size:</b> 37.5</Size>
		</Details>
		<ProductQuantity>
			<IncButton onClick={incrementCartItem}>+</IncButton>
			<Quantity>{quantity}</Quantity>
			<DecButton onClick={removeFromCart}>-</DecButton>
		</ProductQuantity>
	</Wrapper>
  </Container>
  )
}

export default Cart