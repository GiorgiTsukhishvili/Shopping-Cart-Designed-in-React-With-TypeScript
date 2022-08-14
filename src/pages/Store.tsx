import React from "react";
import items from "../data/items.json";
import StoreItem from "../components/StoreItem";

import "../styles/Store.css";

const Store = () => {
  return (
    <div className="store">
      {items.map((item) => {
        return <StoreItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Store;
