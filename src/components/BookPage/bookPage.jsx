import React from 'react';
import '../BookCard/index.css';
import './BookPage.css';
import like2 from './like2.svg';
import balance2 from './balance2.svg';
import shopping_cart2 from './shopping-cart2.svg';
import pay2 from './pay2.png';


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
                <img className="like-book" src={like2} onClick={() => toggleAddDeleteToArr(bookPage.etag, 'wishList')}/>
                <img className='cart-book' src={shopping_cart2} alt="#" onClick={() => toggleAddDeleteToArr(bookPage.etag, 'basket')} />
                <img className="balance-book" src={balance2} alt="#" onClick={() => toggleAddDeleteToArr(bookPage.etag, 'compare')}/>
            </div>
            <a href={bookPage.saleInfo.buyLink} target='_blank' ><img className='google-sale' src={pay2}/></a>
            </div>

            <div className= 'page__wrapper'>
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



