import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import BookPage from '../BookPage/bookPage';

const BookCard = ({title, image, price, id, toggleAddDeleteToArr, renderPage}) => {

    return (
        <div className="book-card">

            <div className="book-img__container">
                <img className="book-card__img"
                     src={image}
                     alt="#"
                     onClick={() => renderPage(id)}/>
                {/*<img className="book-icon" src="/heart.svg" alt="#"/>*/}
                <img onClick={() => toggleAddDeleteToArr(id, 'wishList')}
                     className="book-icon"
                     src="/heart.svg" />

                <button onClick={() => toggleAddDeleteToArr(id, 'basket')}
                        className="book-button"
                        type="submit"> </button>
                <button  onClick={() => toggleAddDeleteToArr(id, 'compare')}
                         className="book-comparison"
                        type="submit"> </button>
            </div>

            <h4 className="book-card__subtitle">{title}</h4>
            <p className="book-price">{price}₴</p>

        </div>



        /*<div className="library">
        {library.map(item =>
            <div className='library-item' key={item.id}>
                <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title}
                     className='library-image'/>
                <p className='library-title'>{item.volumeInfo.title}</p>
                <p className='library-author'>{item.volumeInfo.authors}</p>
            </div>)}
</div>*/
    );
};
BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,

};
BookCard.defaultProps = {
    image: "/no-img.jpg"
};


export default BookCard;
