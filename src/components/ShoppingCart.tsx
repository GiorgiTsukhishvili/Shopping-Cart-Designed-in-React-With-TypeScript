import React from "react";

import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

import "../styles/ShoppingCart.css";

let price = 0;

const ShoppingCart = () => {
  const { toggle, switchToggle, cartItems } = useShoppingCart();

  return (
    <div className={toggle ? "shopping-cart" : "shoppitng-cart-hidden"}>
      <div className="shopping-cart-top">
        <h1>Cart</h1>
        <button onClick={switchToggle}>X</button>
      </div>
      <div className="shopping-cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ShoppingCart;
