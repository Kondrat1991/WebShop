import React from 'react'
import PropTypes from 'prop-types'

const BookPage = ({bookPage}) => {
console.log(Object.keys(bookPage).length);
const book = (<div className='boxCard'>
<div>
    <img className="book-card__img"
             src={bookPage.volumeInfo.imageLinks.thumbnail}
             alt="#"/>
    <div>
        <p className='book--title'>{bookPage.volumeInfo.title}</p>
        {/* <p className='book--author'>{bookPage.author}</p> */}
        <p className="book--price">{bookPage.saleInfo.listPrice}₴</p>
        {/* <p className='book--genre'>{bookPage.genre}</p>
        <p className='book--description'>{bookPage.description}</p> */}
    </div>
</div>
<div>
<img className="book-icon" src="/heart.svg"/>
<button className="book-button" type="submit"> </button>
<button className="book-comparison" type="submit"> </button>
</div>
</div>)
const result = Object.keys(bookPage).length ? book : <h2>Not found</h2>
  return (
    //   <div></div>
    result
  )
}

BookPage.propTypes = {

}

export default BookPage
