// React
import { useContext } from "react";
// Components
import CartItem from "./CartItem";

const Cart = ({ state, context }) => {
  const changeList = useContext(context);

  const handleClearCart = () => {
    changeList({ type: "CLEAR_CART" });
  };

  return (
    <main className='cart-container'>
      <h1>YOUR BAG</h1>
      <div className='cart-container__items'>
        {state.cartItems.map((item) => {
          const { id, img, name, price } = item;
          return (
            <CartItem
              src={img}
              itemName={name}
              itemPrice={price}
              key={id}
              id={id}
              context={context}
            />
          );
        })}
      </div>
      {state.cartSize === 0 ? (
        <p>is currently empty</p>
      ) : (
        <div className='cart-container__total'>
          <div className='cart-container__total-info'>
            <h2>Total:</h2>
            <p>${state.totalCost}</p>
          </div>
          <button type='button' onClick={() => handleClearCart()}>
            CLEAR CART
          </button>
        </div>
      )}
    </main>
  );
};

export default Cart;
