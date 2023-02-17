// React
import React, { createContext, useReducer } from "react";
// Reducer
import { reducer } from "./reducer";
// Data
import { defaultState } from "./data";
// CSS
import "./style.css";
// Components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

export const dispatchContext = createContext();

const Main = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <Navbar cartSize={state.cartSize} />
      <Cart state={state} dispatch={dispatch} />
    </dispatchContext.Provider>
  );
};

export default Main;
