import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name:"alert",
    initialState:{notification:null},
    reducers:{
        showNotificatio(state, action){
            state.notification={
                type:action.payload.type,
                message:action.payload.message,
                open:action.payload.open
            }
        }
    }
})

export const alertActions = alertSlice.actions;
export default alertSlice