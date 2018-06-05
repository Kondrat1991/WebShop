import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Menu from '../Menu/Menu';
// import Search from '../Search/Search';
import Basket from '../Basket/Basket';
import NavbarMenu from '../menu/navbar_menu';

import './Header.css'

const Header = ({basketCounter, toggleVisibleBasket, basket, visibleBasket}) => (
    <div className='wrapper'>
        <div className="container">
            <header className="header">
                <NavbarMenu />
                <h1 className="title">
                    maison
                </h1>
                <div className='cart'>
                <button className="btn btn-cart" onClick={() => toggleVisibleBasket()}/>
                <div className="cart__counter">{basketCounter}</div>
                    </div>
                <Basket basket={basket} visibleBasket={visibleBasket}/>
            </header>
        </div>
    </div>
);

Header.propTypes = {};

export default Header;
