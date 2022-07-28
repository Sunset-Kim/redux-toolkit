import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: { value: state.count.value + 1 } };

    default:
      return state;
  }
}

const initialState = {
  count: {
    value: 0,
  },
};

const store = createStore(reducer, initialState);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
