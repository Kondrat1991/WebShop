import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Menu from '../Menu/Menu';
// import Search from '../Search/Search';
import Basket from '../Basket/Basket';
import NavbarMenu from '../menu/navbar_menu';

import './Header.css'
import {NavLink} from 'react-router-dom';


const Header = ({basketCounter, toggleVisibleBasket, basket, visibleBasket, toggleAddDeleteToArr, plus, minus, clearBasket}) => (
    <div className='wrapper'>
        <div className="container">
            <header className="header">
                <NavbarMenu />
                <h1 className="title">
                    maison
                </h1>
                {/*/!*<Search />*!/*/}
                {/*/!*<Menu />*!/*/}
                {/*<nav className='nav'>*/}
                    {/*<ul className="menu">*/}
                        {/*<li className="menu__item"><NavLink to='/'>Home</NavLink></li>*/}
                        {/*<li className="menu__item"><NavLink to='/wish-list'>Wish List</NavLink></li>*/}
                        {/*<li className="menu__item"><NavLink to='/compare-books'>Compare Books</NavLink></li>*/}
                        {/*<li className="menu__item"><NavLink to='/about'>About Ass</NavLink></li>*/}
                    {/*</ul>*/}
                {/*</nav>*/}
                <div className='cart'>
                <button className="btn btn-cart" onClick={() => toggleVisibleBasket()}/>
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
