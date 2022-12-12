import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";

const store = configureStore({
  //  pass all the reducers
  reducer: {
    counter: counterReducer
  }
});

export default store;
