import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Menu from '../Menu/Menu';
// import Search from '../Search/Search';
import Basket from '../Basket/Basket';
import NavbarMenu from '../menu/navbar_menu';

import './Header.css'
import {NavLink} from 'react-router-dom';

const Header = ({basketCounter, toggleVisibleBasket, basket, visibleBasket, toggleAddDeleteToArr, minus, plus, clearBasket}) => (
    <div className='wrapper'>
        <div className="container">
            <header className="header">
                <NavbarMenu />
                <h1 className="title">
                    maison
                </h1>
                <div className='cart' onClick={() => toggleVisibleBasket()}>
                <button className="btn btn-cart" />
                <div className="cart__counter">{basketCounter}</div>
                    </div>
                <Basket basket={basket}
                        toggleAddDeleteToArr={toggleAddDeleteToArr}
                        plus={plus}
                        minus={minus}
                        visibleBasket={visibleBasket}
                        clearBasket={clearBasket}/>
            </header>
        </div>
    </div>
);

Header.propTypes = {};

export default Header;
