import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../BookContainer/BookContainer'
import './WishList.css'

const WishList = ({wishList, toggleAddDeleteToArr, renderPage}) => {
    return (
        <div className='wish-list'>
            <BookContainer library={wishList}
                           toggleAddDeleteToArr={toggleAddDeleteToArr}
                           renderPage={renderPage}/>
        </div>
    );
};

WishList.propTypes = {
    wishList: PropTypes.array,
    toggleAddDeleteToArr: PropTypes.func.isRequired,
};

export default WishList;