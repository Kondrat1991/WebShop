import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const BookCard = ({title, image, price, author, addToCompareBooks, id, webReaderLink }) => {

    return (






        <div className="book-card">

            <div className="book-img__container">
                <img className="book-card__img"
                     src={image}
                     alt="#"/>

                {/*<img className="book-icon" src="/heart.svg" alt="#"/>*/}
                <h4 className="book-card__subtitle">{title}</h4>
                <img className="book-icon" src="/heart.svg" alt="#"/>

                <a className="book-link" href={webReaderLink} target='_blank'> </a>


                <div className="book-button--container">
                    <button className="book-button" type="submit"> </button>
                    <p className="book-add">Add To Cart</p>
                </div>

                <button onClick={() => addToCompareBooks(id, 'compare')} className="book-comparison"
                        type="submit"> </button>
            </div>

            <div className="book-author--container">
                <h3 className="book-author">{author}</h3>
                <p className="book-price">{price}₴</p>

            </div>

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
