import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const BookCard = ({title, image, price}) => {
    return (
        <div className="book-card">
            <img className="book-card__img"
                 src={image}
                 alt="#"/>
            <img className="book-icon" src="/heart.svg" alt="#"/>
            <button className="book-button" type="submit"> Add to Cart</button>
            <h4 className="book-card__subtitle">{title}</h4>
            <p className="book-price">{price}</p>
        </div>
    );
};
BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired

};
BookCard.defaultProps = {
    image: "/no-img.jpg"
};
export default BookCard;
