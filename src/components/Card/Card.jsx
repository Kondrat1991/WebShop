import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Card = ({plus, minus, toggleAddDeleteToArr, etag, price, title, image, author, total}) => {

    return (
            <li className='wrap-card'>
                <img src={image} alt="poster"/>
                <div>
                    <button onClick={() => toggleAddDeleteToArr(etag, 'basket')} className='button-del_card'>delete card</button>
                    <p>Name: {title}</p>
                    <p>Author: {author}</p>
                    <p>Price: {price} ₴</p>
                    <p>Total: {total}</p>
                    <p>Amount: {(price * total).toFixed(2)} ₴</p>
                    <div className='wrap-counter'>
                        <button onClick={() => total <= 1 ? toggleAddDeleteToArr(etag, 'basket') : minus(etag)} className='calc'>-</button>
                        <button onClick={() => plus(etag)} className='calc'>+</button>
                    </div>
                </div>
            </li>
        )
};

Card.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        author: PropTypes.string,
        price: PropTypes.number,
        total: PropTypes.number,
        id: PropTypes.string
    })),

    deleteCard:PropTypes.func,
};

Card.defaultProps = {
    books: [{
        name: 'OOOOO',
        author: 'OOOOO',
        price: 0,
        total: 1,
        id: 'id_000'
    }]
};

export default Card;