import React from "react";
import { NavLink } from "react-router-dom";

import { useShoppingCart } from "../context/ShoppingCartContext";

import { AiOutlineShoppingCart } from "react-icons/ai";

import "../styles/Navbar.css";

const Navbar = () => {
  const { switchToggle } = useShoppingCart();

  return (
    <div className="navbar">
      <div>
        <NavLink
          to="/"
          className="navbar-link"
          style={({ isActive }) => (isActive ? { color: "black" } : {})}
        >
          Home
        </NavLink>
        <NavLink
          to="/Store"
          className="navbar-link"
          style={({ isActive }) => (isActive ? { color: "black" } : {})}
        >
          Store
        </NavLink>
        <NavLink
          to="/about"
          className="navbar-link"
          style={({ isActive }) => (isActive ? { color: "black" } : {})}
        >
          About
        </NavLink>
      </div>
      <button className="navbar-button" onClick={switchToggle}>
        <AiOutlineShoppingCart />
      </button>
    </div>
  );
};

export default Navbar;
