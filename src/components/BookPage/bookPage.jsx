import React from 'react'
import PropTypes from 'prop-types';
import '../BookCard/index.css'
import './BookPage.css'

const BookPage = ({bookPage}) => {
console.log('bookPage', bookPage);
  return (
    //    <div> {bookPage.id}</div>
     <div className='page'>
        <div className='page__cont'>
            <img className="page__pic"
                     src={bookPage.volumeInfo.imageLinks.thumbnail}
                     alt="#"/>
            <div className= 'page__wrapper'>
                <p className='page__title'>{bookPage.volumeInfo.title}</p>
                <p className='page__author'>{bookPage.volumeInfo.authors}</p>
                <p className="page__price">{bookPage.saleInfo.listPrice ? `${bookPage.saleInfo.listPrice.amount} ${bookPage.saleInfo.listPrice.currencyCode}` : 'not for sale'}</p>
                {/* <p className='book--genre'>{bookPage.genre}</p> */}
                <p className='page__description'>{bookPage.volumeInfo.description}</p>
            </div>
        </div>
        <div>
        {/*<img className="book-icon" src="/heart.svg"/>*/}
        {/*<button className="book-button" type="submit"> </button>*/}
        {/*<button className="book-comparison" type="submit"> </button>*/}
        </div>
    </div>
  )
};

BookPage.propTypes = {};

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
