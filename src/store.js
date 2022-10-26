import { createSlice, reducer } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";



const todoSlice = createSlice({
  name: "todo",
  initialeState:[],

  reducers: {
    addFav:(state, action) => {},
    removeFav:(state, action) => {}
  }
})



