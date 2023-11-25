import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const CartItems = () =>{

    const cartItems = useSelector((state)=>state.cart.itemsList)
    return(
        <div>
            <Navbar/>
            {cartItems.map((item)=>(
                <div>
                    <Cart 
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    quantity={item.quantity}
                    id={item.id}
                    totalPrice={item.totalPrice}/>
                </div>
            ))}
            <Footer/>
        </div>
    )
}

export{CartItems};