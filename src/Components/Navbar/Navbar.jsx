import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar({ cat, cart, setCartBtn, catBtn, setCatBtn }) {
  return (
    <div className="flex py-4 bg-rare-color text-gray-50 text-2xl justify-between px-6 sm:px-10 fixed w-screen z-30">
      <Link to={`/`}>
        <div>
          <i class="fa-solid fa-bars" onClick={() => setCatBtn(!catBtn)}></i>
            <i
              className="fa-solid fa-shop second-color "
              aria-hidden="true"
            ></i>
            E-Shop
          
        </div>
      </Link>
      <h1 className="hidden md:flex">{cat ? cat.name : "All"}</h1>
      <div className="flex justify-end px-4 ">
        <ul className="">
          <li className="" onClick={() => setCartBtn(true)}>
            <i
              className="fa-solid fa-cart-shopping relative"
              id="cart-btn"
              aria-hidden="true"
            >
              <span
                className=" absolute -top-2 -right-3 start-50 text-sm second-color bg-black"
                id="cart-number"
              >
                {cart ? cart.length : 0}
              </span>
            </i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
