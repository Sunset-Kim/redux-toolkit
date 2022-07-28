import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// tookit

import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export const asyncCounterUp = createAsyncThunk("counter/asyncCounterUp", async () => {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });

  return data;
});

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "",
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
  extraReducers: (build) => {
    build.addCase(asyncCounterUp.pending, (state, action) => {
      state.status = "loading";
    });

    build.addCase(asyncCounterUp.fulfilled, (state, action) => {
      state.value += 1;
      state.status = "";
    });

    build.addCase(asyncCounterUp.rejected, (state, action) => {
      state.status = "error";
    });
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
