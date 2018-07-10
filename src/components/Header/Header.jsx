import React from 'react';
import PropTypes from 'prop-types';
import Basket from '../Basket/Basket';
import NavbarMenu from '../menu/navbar_menu';
import SearchForm from '../SearchForm/SearchForm'

import './Header.css'

const Header = ({basketCounter, toggleVisibleBasket, basket, visibleBasket, toggleAddDeleteToArr, minus, plus, clearBasket, searchBook}) => (
    <div className='wrapper'>
        <div className="container">
            <header className="header">


                    <NavbarMenu />
                    <SearchForm
                        searchBook={searchBook}
                    />



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

Header.propTypes = {
    basketCounter: PropTypes.number.isRequired,
    toggleVisibleBasket: PropTypes.func.isRequired,
    basket: PropTypes.array.isRequired,
    visibleBasket: PropTypes.bool.isRequired,
    toggleAddDeleteToArr: PropTypes.func.isRequired,
    minus: PropTypes.func.isRequired,
    plus: PropTypes.func.isRequired,
    clearBasket: PropTypes.func.isRequired,
};

export default Header;
