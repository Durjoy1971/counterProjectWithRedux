import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter = state.counter + 1;
    },
    decrementCounter: (state) => {
      state.counter = state.counter - 1;
    },
    addValueCounter: (state, action) => {
      console.log('Sended : ' + action.payload);
      state.counter += action.payload;
    },
  },
});

export const { incrementCounter, decrementCounter, addValueCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
