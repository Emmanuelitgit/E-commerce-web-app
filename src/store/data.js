import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchData", async(thunkAPI) =>{
    try{
        const response = await axios.get("http://localhost:8000/api/data");
        return response.data
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})


export const insertData = createAsyncThunk("insertData", async(thunkAPI, dataToInsert) =>{
    
    try{
        await axios.post("http://localhost:8000/api/insertData", {dataToInsert})
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

const dataSlice = createSlice({
    name:"data",
    initialState:{
        data:[],
        status:"idle"
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending, (state)=>{
            state.status = "Loading";
        })
        .addCase(fetchData.fulfilled, (state, action)=>{
            state.status = "succeed"
            state.data = action.payload
        })
        .addCase(insertData.fulfilled, (state, action)=>{
            state.data.push(action.payload)
            console.log(action.payload)
        })
       
    }
});

export default dataSlice;