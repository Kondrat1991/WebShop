import React, { Component } from "react";

import Basket from "../Basket/Basket";
import NavbarMenu from "../menu/navbar_menu";
import SearchForm from "../SearchForm/SearchForm";

import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = ({
  basketCounter,
  toggleVisibleBasket,
  basket,
  visibleBasket,
  toggleAddDeleteToArr,
  minus,
  plus,
  clearBasket,
  searchBook
}) => (
  <div className="wrapper">
    <div className="container">

       <NavbarMenu />
      <header className="header">
    
        <SearchForm searchBook={searchBook} />

         <div className="cart" onClick={() => toggleVisibleBasket()}>
          <button className="btn btn-cart" />
          <div className="cart__counter">{basketCounter}
          </div>
        </div>
        <Basket
          basket={basket}
          toggleAddDeleteToArr={toggleAddDeleteToArr}
          plus={plus}
          minus={minus}
          visibleBasket={visibleBasket}
          clearBasket={clearBasket}
        />
      </header>
    </div>
  </div>
);

Header.propTypes = {};

export default Header;
