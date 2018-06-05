import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import BookPage from '../BookPage/bookPage';
import {NavLink} from 'react-router-dom';

const BookCard = ({title, image, price, etag, author, toggleAddDeleteToArr, webReaderLink, renderPage, bookPage}) => {

    return (
        <div className="card">
            <div className="card__cont">

                <div className="card__overlay">

                    <img className="book-icon" src="/like.svg" alt="#"
                         onClick={() => toggleAddDeleteToArr(etag, 'wishList')}
                    />

                    <img className="book-comparison" src="/balance.svg" alt="#"
                         onClick={() => toggleAddDeleteToArr(etag, 'compare')}
                    />
                    <a className='preview' target={'_blank'} href={webReaderLink}>preview</a>
                    <div className="buy">
                        {/*<p className='cart'>Add to cart </p>*/}
                        {/*<img src="/icon.svg" alt="#" className='card__info'/>*/}


                        <img src="/shopping-cart.svg" alt="#" className='cart-icon'
                             onClick={() => toggleAddDeleteToArr(etag, 'basket')}
                        />

                        <NavLink to='/page-book'>
                            <img className="book-info" src="/icon.svg" alt="#"
                                 onClick={() => renderPage(etag)}
                            />
                        </NavLink>


                    </div>
                </div>


                <img className="card__pic" src={image} alt='#'/>

            </div>

            <h4 className="card__title">{title}</h4>
            <p className="card__author">{author}</p>
            <p className="card__price">{price} грн</p>
        </div>

    );
};
BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    // author: PropTypes.string.isRequired

};
BookCard.defaultProps = {
    image: "/no-img.jpg",
    author: "undefined Author"
};


export default BookCard;
