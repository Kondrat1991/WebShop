import React from 'react'
import PropTypes from 'prop-types'

const BookPage = ({library}) => {
    return (
        <div className='boxCard'>
            <div>
                <img className="book-card__img"
                     src={image}
                     alt="#"/>
                <div>
                    <p className='book--title'>{title}</p>
                    <p className='book--author'>{library.author}</p>
                    <p className="book--price">{price}₴</p>
                    <p className='book--genre'>{library.genre}</p>
                    <p className='book--description'>{library.description}</p>
                </div>
            </div>
            <div>
                <img className="book-icon" src="/heart.svg"/>
                <button className="book-button" type="submit"></button>
                <button className="book-comparison" type="submit"></button>
            </div>

        </div>
    )
}

BookPage.propTypes = {}

export default BookPage
