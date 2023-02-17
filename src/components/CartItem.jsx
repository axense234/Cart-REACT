// React
import { useContext, useState } from "react";

const CartItem = ({ src, itemName, itemPrice, id, context }) => {
  const changeList = useContext(context);
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
    <div className='cart-item-container'>
      <div className='cart-item-container__info'>
        <img src={src} alt={itemName} />
        <div className='cart-item-container__details'>
          <h2>{itemName}</h2>
          <p>${itemPrice}</p>
          <button type='button' onClick={() => handleRemove()}>
            Remove
          </button>
        </div>
      </div>
      <div className='cart-item-container__buttons'>
        <button
          type='button'
          className='btn-part'
          onClick={() => {
            handleItemQuantity("up");
          }}
        >
          &#8963;
        </button>
        <p>{itemQuantity}</p>
        <button
          type='button'
          className='btn-part'
          onClick={() => {
            handleItemQuantity("down");
          }}
        >
          &#8964;
        </button>
      </div>
    </div>
  );
};

export default CartItem;
