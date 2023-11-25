import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Pages/LogIn';
import Home from './Pages/Home';
import Register from './Pages/Register';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Cart from "./Pages/Cart"
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import { CartItems } from './Pages/CartItems';
import { useSelector } from 'react-redux';
import Data from './Components/Data';




const Layout =()=>{
  return(
   <> 
   <Navbar/>
   <Outlet/>
   <Footer/>
   </>
  )
 }
 
 const router = createBrowserRouter([
   {
     path: "/",
     element: <Layout/>,
     children:[
       {
       path: "/",
       element: <Home/>
       },

       {
        path: "/product/:id",
        element:<Product/>
        },
     ]
   },
 
   {
     path: "/register",
     element: <Register/>
   },
 
   {
     path: "/login",
     element: <Login/>
   },

   {
    path: "/cart",
    element: <CartItems/>
   },

   {
    path: "/productlist",
    element: <ProductList/>
   },

 ])

function App() {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
