import React from 'react';
import PropTypes from 'prop-types';
import './index.css';






const BookCard = ({title, image, price, author, addToCompareBooks, id}) => {

    return (
        <div className="book-card">

            <div className="book-img__container">
                <img className="book-card__img"
                     src={image}
                     alt="#"/>

                {/*<img className="book-icon" src="/heart.svg" alt="#"/>*/}
                <img className="book-icon" src="/heart.svg"/>


                 {/*Add to cart button*/}
                <button className="book-button" type="submit"> </button>
                {/*Comparison*/}
                {/*<button onClick={() => addToCompareBooks(id, compare)} className="book-comparison" type="submit"> </button>*/}
                <button onClick={() => addToCompareBooks(id, 'compare')} className="book-comparison" type="submit"> </button>
            </div>
            <h3 className="book-author">{author}</h3>
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
    // author: PropTypes.string.isRequired

};
BookCard.defaultProps = {
    image: "/no-img.jpg",
    author: "undefined Author"
};


export default BookCard;
