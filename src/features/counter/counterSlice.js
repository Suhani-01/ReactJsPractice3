import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: 0,
// };

//reducer old state or action ka use krke nayi state bnata hai
const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0
  },
  //here are the reducers ,we are the functionalities
  reducers: {
    //increment action requirement will run this logic
    increment: state => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer
