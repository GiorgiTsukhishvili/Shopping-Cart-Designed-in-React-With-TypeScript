import React from "react";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/currencyFormatter";

import storeItems from "../data/items.json";

import "../styles/Cart.css";

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart, getItemQuantity } = useShoppingCart();

  const item = storeItems.find((it) => it.id === id);

  if (item == null) return null;

  return (
    <div className="cart">
      <div className="cart-left">
        <img src={item.imgUrl} alt="Cart Item" />
        <div className="cart-left-things">
          <div className="cart-left-things-inner">
            <h1>{item.name}</h1>
            <p>x {getItemQuantity(id)}</p>
          </div>
          <p>{formatCurrency(item.price)}</p>
        </div>
      </div>
      <div className="cart-right">
        <h1>{formatCurrency(item.price * getItemQuantity(id))}</h1>
        <button onClick={() => removeFromCart(id)}>X</button>
      </div>
    </div>
  );
};

export default CartItem;
