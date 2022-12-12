import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

// define actions
// key in reducers are action
// destructuring of object
export const { increment, decrement } = counterSlice.actions;

// create a selectore which get's the value from the store
// we defined the functionality how selector will work
export const selectCounter = (state) => state.counter.value;

// this is the syntax you need to follow it's is mandatory
export default counterSlice.reducer;
