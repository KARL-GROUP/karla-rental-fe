import { createSlice } from "@reduxjs/toolkit";

//creating the initial state of data

const initialState = {
  id: "",
 
};


export const OneCarSlice = createSlice({
  name: "onecar",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },

    post: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId, post } = OneCarSlice.actions;
export default OneCarSlice.reducer;