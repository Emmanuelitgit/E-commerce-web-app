import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import alertSlice from "./notification";
import dataSlice from "./data";

const store = configureStore({
  reducer:{
    cart:cartSlice.reducer,
    alert:alertSlice.reducer,
    data:dataSlice.reducer
  }
})

export default store