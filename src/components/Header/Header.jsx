import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Menu from '../Menu/Menu';
// import Search from '../Search/Search';
import './Header.css'


const Header = ({basketCounter}) => (
    <div className='wrapper'>
        <div className="container">
            <header className="header">
                <button className="btn btn-menu"/>
                <h1 className="title">
                    maison
                </h1>
                {/*<Search />*/}
                {/*<Menu />*/}
                <nav className='nav'>
                    <ul className="menu">
                        <li className="menu__item">Home</li>
                        <li className="menu__item">Wish List</li>
                        <li className="menu__item">Compare Books</li>
                    </ul>
                </nav>
                <div className='cart'>
                <button className="btn btn-cart"/>
                <div className="cart__counter">{basketCounter}</div>
                    </div>
            </header>
        </div>
    </div>
);

Header.propTypes = {};

export default Header;
