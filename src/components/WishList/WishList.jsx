import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../BookContainer/BookContainer'
import './WishList.css'

const WishList = ({wishList, toggleAddDeleteToArr}) => {
        return (
            <div className='wishList__page'>
                <h2 className='title-wish-list'>Wish List Page</h2>
                <BookContainer library={wishList}
                               toggleAddDeleteToArr={toggleAddDeleteToArr}/>
            </div>
        );
};

WishList.propTypes = {
    wishList: PropTypes.array,
    toggleAddDeleteToArr: PropTypes.func.isRequired,
};

export default WishList;