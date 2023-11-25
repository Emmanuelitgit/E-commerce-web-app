import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("products", async()=>{
  try{
    const response = await axios.get("http://localhost:8000/products");
    return response.data
  }catch(err){
    console.log(err)
  }
})

const cartSlice = createSlice({
  name:"cart",
  initialState:{
    products:[],
    itemsList: [],
    totalQuantity: 0,
    singleQuantity:0
  },
  reducers:{
    addToCart(state, action){
      const newItem = action.payload;
      const existingItem = state.itemsList.find((item)=>item.id === newItem.id);

      if(existingItem){
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price
      }
      
      else{
        state.itemsList.push({
          title:newItem.title,
          price:newItem.price,
          id:newItem.id,
          quantity:1,
          img:newItem.img,
          totalPrice:newItem.price
        });
        state.totalQuantity++;
      }
    },

    removeFromCart(state,action){
      const id = action.payload;
      
      const existingItem = state.itemsList.find((item)=>item.id === id);
      
      if(existingItem.quantity === 1){
        state.itemsList = state.itemsList.filter((item)=>item.id !== id)
        state.totalQuantity--;
      }else{
        existingItem.quantity--;
        existingItem.totalPrice-=existingItem.price;
      }
    },

    incrementCartItem(state, action){
      state.singleQuantity++;
    },
    decrementCartItem(state, action){
      state.singleQuantity--;
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(fetchData.fulfilled, (state, action)=>{
      state.products = action.payload;
      console.log(action.payload)
    })
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;