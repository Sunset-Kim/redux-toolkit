import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// tookit

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value <= 0) {
        return state.value;
      } else {
        state.value -= 1;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export const { increment, decrement } = counterSlice.actions;
