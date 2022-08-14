import React from "react";
import { formatCurrency } from "../utilities/currencyFormatter";
import { useShoppingCart } from "../context/ShoppingCartContext";

import "../styles/StoreItem.css";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="store-container">
      <img src={imgUrl} className="store-img" alt="Store" />

      <div className="container-body">
        <h1 className="store-header">{name}</h1>
        <p className="store-p">{formatCurrency(price)}</p>
      </div>

      <div className="store-purchase">
        {quantity === 0 ? (
          <button
            className="add-button"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add To Cart
          </button>
        ) : (
          <div className="advanced-button-container">
            <div className="control-buttons">
              <button onClick={() => decreaseCartQuantity(id)}>-</button>
              <p>{quantity} in cart</p>
              <button onClick={() => increaseCartQuantity(id)}>+</button>
            </div>
            <button
              className="remove-button"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
