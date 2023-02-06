import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../slice/counter.slice";

const rootReducer = {
  counter: counterReducer,
};

export const rootStore = configureStore({
  reducer: rootReducer,
});
