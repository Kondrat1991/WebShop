import React from 'react';
import PropTypes from 'prop-types';

const BookCard = ({title, image,price}) => {
    return (
        <div className="book-card">
            <img className="book-card__img"
                 src="https://books.google.com/books/content/images/frontcover/x6yqDAAAQBAJ?fife=w200-h300"
                 alt="#"/>
            <div className="book-card__title">
                <h4 className="book-card__subtitle">Рабіня, воин, королева</h4>
                <img src="/heart.svg" alt="#"/>
            </div>
            <p className="book-text">24$</p>

        </div>
    );
};

BookCard.propTypes = {};


BookCard.defaultProps = {
    image: "/no-img.jpg"
};

export default BookCard;
