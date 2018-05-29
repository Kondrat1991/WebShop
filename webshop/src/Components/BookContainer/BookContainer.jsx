import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
import BookCard from '../BookCard/BookCard'

const BookContainer = (props) => {
    return (
        <div className="book-section">
            <BookCard />
        </div>

    );
};

BookContainer.propTypes = {};
BookContainer.defaultProps = {};

export default BookContainer;






