import React from 'react'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/NewsLetter'
import Slider from '../Components/Slider'
// import Practice from '../Components/Practice'
import styled from "styled-components";
import Products from '../Components/Products'
import "../style.css"


function Home() {

  const Header = styled.h1`
  text-align:center;
  color:#192a56;
  margin-top:2%;
`;

  return (
    <div>
	<Navbar/>
  <Slider/>
  <Header>Our Fashion</Header>
  <div className='border'>
    <span></span>
  </div>
  <Products/>
  <NewsLetter/>
    </div>
  )
}

export default Home