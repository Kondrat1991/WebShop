import React from 'react'
import balance2 from "./img/balance2.svg";
import like2 from "./img/like2.svg";
import shoppingCart from  "./img/shopping-cart2.svg";
import pay2 from  "./img/pay2.png";

import '../BookCard/index.css';
import './BookPage.css';

const BookPage = ({bookPage, toggleAddDeleteToArr, etag}) => {
    console.log('bookPage', bookPage);
    return (

        <div className='page'>
            <div className='page__cont'>
                <div>
                    <img className="page__pic"
                         src={bookPage.volumeInfo.imageLinks.thumbnail}
                         alt="#"/>
                    <div className='icon--box'>
                        <img className="like-book" src={like2} //"/like.svg"
                             onClick={() => toggleAddDeleteToArr(bookPage.etag, 'wishList')}/>
                        <img className='cart-book' src={shoppingCart} alt="#"  // "/shopping-cart.svg"
                             onClick={() => toggleAddDeleteToArr(bookPage.etag, 'basket')}/>
                        <img className="balance-book" src={balance2} alt="#" // "/balance.svg"
                             onClick={() => toggleAddDeleteToArr(bookPage.etag, 'compare')}/>
                    </div>
                    <a href={bookPage.saleInfo.buyLink} target='_blank'><img className='google-sale'
                                                                             src={pay2}/></a>
                </div>

                <div className='page__wrapper'>
                    <p className='page__title'>{bookPage.volumeInfo.title}</p>
                    <p className='page__author'>{bookPage.volumeInfo.authors}</p>
                    <p className="page__price">{bookPage.saleInfo.listPrice ? `${bookPage.saleInfo.listPrice.amount} ${bookPage.saleInfo.listPrice.currencyCode}` : 'not for sale'}</p>
                    <p className='page__description'>{bookPage.volumeInfo.description}</p>
                </div>
            </div>

        </div>
    )
};


export default BookPage;



