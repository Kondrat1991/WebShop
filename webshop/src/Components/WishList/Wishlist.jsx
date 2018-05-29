import React, {Component} from 'react';
// import BookCard from '../BookCard/BookCard'
import PropTypes from 'prop-types';

const WishList = ({books}) => {
    const newArr = books.filter(book => book.favorite === true);
        return (
            <div>
                {newArr.map()}
            </div>
        );
};

WishList.propTypes = {};

export default WishList;
