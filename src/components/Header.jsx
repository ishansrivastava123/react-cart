import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

const Header = () => {
  const { cartItems } = useSelector(state => state.cart);
  let sum = 0;

  return (
    <nav>
      <a href="https://fakestoreapi.com/" target='blank'>
        <img src={logo} alt="Fake Store API Logo" />
      </a>
      <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>
              <MdShoppingCart />
              {
                cartItems.forEach((i) => {
                  sum += i.quantity;
                })
              }
              <p>{sum}</p>
          </Link>
      </div>
    </nav>
  )
}

export default Header