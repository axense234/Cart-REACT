// React
import React, { createContext, useReducer } from "react";
// Data
import { defaultState } from "./data";
// CSS
import "./style.css";
// Components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
// Reducer
import { reducerFunction } from "./reducerFunction";

const dispatchContext = createContext();

const Main = () => {
  const [state, dispatch] = useReducer(reducerFunction, defaultState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <Navbar cartSize={state.cartSize} />
      <Cart state={state} dispatch={dispatch} context={dispatchContext} />
    </dispatchContext.Provider>
  );
};

export default Main;
