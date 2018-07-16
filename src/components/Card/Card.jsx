import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Card = ({plus, minus, toggleAddDeleteToArr, etag, price, title, image, author, total}) => {

    return (
        <li className='wrap-li'>
            <div className='wrap-poster'>
                <img src={image} alt="poster" className='poster'/>
            </div>
            <div className='wrap-inform'>
                <p className='text-title'>Name: <span className='text-value'>{title}</span></p>
                <p className='text-title'>Author: <span className='text-value'>{author}</span></p>
                <p className='text-title'>Price: <span className='text-value'>{price} ₴</span></p>
                <p className='text-title'>Total: <span className='text-value'>{total}</span></p>
                <p className='text-title'>Amount: <span className='text-value'>{(price * total).toFixed(2)} ₴</span></p>
                <div className='wrap-counter'>
                    <button onClick={() => total <= 1 ? toggleAddDeleteToArr(etag, 'basket') : minus(etag)}
                            className='calc'>-
                    </button>
                    <button onClick={() => toggleAddDeleteToArr(etag, 'basket')} className='button-del_card'>Delete
                        card
                    </button>
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

    deleteCard: PropTypes.func,
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