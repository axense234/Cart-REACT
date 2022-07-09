import React, { createContext, useContext, useReducer, useState } from "react";
// Items
import { items } from "./items";
// CSS
import "./style.css";
// Reducer
import { reducer } from "./Reducer";

const dispatchContext = createContext();

export const App = () => {
  const defaultState = {
    cartItems: items,
    cartSize: 4,
    totalCost: 2200,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <dispatchContext.Provider value={dispatch}>
      <Navbar cartSize={state.cartSize}></Navbar>
      <MainContent state={state} dispatch={dispatch}></MainContent>
    </dispatchContext.Provider>
  );
};

const Navbar = ({ cartSize }) => {
  return (
    <div className='navbar'>
      <h1 id='company-name'>Axense's Team</h1>
      {/* Shopping Icon */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='bi bi-cart'
        viewBox='0 0 16 16'
      >
        <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
      </svg>
      <div id='cart-size'>{cartSize}</div>
    </div>
  );
};

const MainContent = ({ state }) => {
  console.log(state);
  const changeList = useContext(dispatchContext);

  const handleClearCart = () => {
    changeList({ type: "CLEAR_CART" });
  };
  return (
    <>
      <main className='main-content'>
        <h1 id='content-title'>YOUR BAG</h1>
        <div className='items-content'>
          {state.cartItems.map((item) => {
            const { id, img, name, price } = item;
            return (
              <Item
                src={img}
                itemName={name}
                itemPrice={price}
                key={id}
                id={id}
              ></Item>
            );
          })}
        </div>
        {state.cartSize === 0 ? (
          <p id='empty'>is currently empty</p>
        ) : (
          <div className='total'>
            <div className='total-info'>
              <p id='total'>Total</p>
              <p id='cost'>
                <span>$</span>
                {state.totalCost}
              </p>
            </div>
            <button id='clear-cart' onClick={() => handleClearCart()}>
              CLEAR CART
            </button>
          </div>
        )}
      </main>
    </>
  );
};

const Item = ({ src, itemName, itemPrice, id }) => {
  const changeList = useContext(dispatchContext);
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleItemQuantity = (direction) => {
    if (direction === "down") {
      if (itemQuantity === 1) {
        changeList({ type: "REMOVE_ITEM", payload: { id, itemPrice } });
      } else {
        setItemQuantity(itemQuantity - 1);
        changeList({ type: "MINUS_QUANTITY", payload: itemPrice });
      }
    } else if (direction === "up") {
      setItemQuantity(itemQuantity + 1);
      changeList({ type: "PLUS_QUANTITY", payload: itemPrice });
    }
  };

  const handleRemove = () => {
    changeList({ type: "REMOVE_ITEM", payload: { id, itemPrice } });
  };

  return (
    <>
      <div className='item-container'>
        <img src={src} alt='' />
        <div className='item-info'>
          <h2>{itemName}</h2>
          <p>
            <span>$ </span>
            {itemPrice}
          </p>
          <button id='remove-item' onClick={() => handleRemove()}>
            Remove
          </button>
        </div>
        <div id='size-button'>
          <button
            className='btn-part'
            onClick={() => {
              handleItemQuantity("up");
            }}
          >
            {/* Chevron Up */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-chevron-up'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
              />
            </svg>
          </button>
          {itemQuantity == 0 ? null : <p id='item-quantity'>{itemQuantity}</p>}
          <button
            className='btn-part'
            onClick={() => {
              handleItemQuantity("down");
            }}
          >
            {/* Chevron Down */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-chevron-down'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
