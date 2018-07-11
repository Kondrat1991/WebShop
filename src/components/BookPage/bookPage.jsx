import React from 'react'
// import PropTypes from 'prop-types';
import '../BookCard/index.css'
import './BookPage.css'

const BookPage = ({bookPage, toggleAddDeleteToArr, etag}) => {
console.log('bookPage', bookPage);
  return (
    //    <div> {bookPage.id}</div>
     <div className='page'>
        <div className='page__cont'>
            <div>
            <img className="page__pic"
                     src={bookPage.volumeInfo.imageLinks.thumbnail}
                     alt="#"/>
            <div className='icon--box'>
                <img className="like" src="/like.svg" alt = "img" onClick={() => toggleAddDeleteToArr(bookPage.etag, 'wishList')}/>
                <img className='cart' src="/shopping-cart.svg" alt="#" onClick={() => toggleAddDeleteToArr(bookPage.etag, 'basket')} />
                <img className="balance" src="/balance.svg" alt="#" onClick={() => toggleAddDeleteToArr(bookPage.etag, 'compare')}/>
            </div>
            <a href={bookPage.saleInfo.buyLink} target='_blank' ><img className='google-sale' alt = "img" src='/pay.png'/></a>
            </div>

            <div className= 'page__wrapper'>
                <p className='page__title'>{bookPage.volumeInfo.title}</p>
                <p className='page__author'>{bookPage.volumeInfo.authors}</p>
                <p className="page__price">{bookPage.saleInfo.listPrice ? `${bookPage.saleInfo.listPrice.amount} ${bookPage.saleInfo.listPrice.currencyCode}` : 'not for sale'}</p>
                {/* <p className='book--genre'>{bookPage.genre}</p> */}
                <p className='page__description'>{bookPage.volumeInfo.description}</p>
            </div>
        </div>

    </div>
  )
};

// BookPage.propTypes = {};

export default BookPage;


// const BookPage = ({bookPage}) => {
//     console.log(Object.keys(bookPage).length);
//     const book = (<div className='boxCard'>
//     <div>
//         <img className="book-card__img"
//                  src={bookPage.volumeInfo.imageLinks.thumbnail}
//                  alt="#"/>
//         <div>
//             <p className='book--title'>{bookPage.volumeInfo.title}</p>
//             {/* <p className='book--author'>{bookPage.author}</p> */}
//             <p className="book--price">{bookPage.saleInfo.listPrice}₴</p>
//             {/* <p className='book--genre'>{bookPage.genre}</p>
//             <p className='book--description'>{bookPage.description}</p> */}
//         </div>
//     </div>
//     <div>
//     <img className="book-icon" src="/heart.svg"/>
//     <button className="book-button" type="submit"> </button>
//     <button className="book-comparison" type="submit"> </button>
//     </div>
//     </div>)
//     const result = Object.keys(bookPage).length ? book : <h2>Not found</h2>
//       return (
//         //   <div></div>
//         result
//       )
//     }
