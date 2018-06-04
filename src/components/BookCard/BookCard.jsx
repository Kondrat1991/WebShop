import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const BookCard = ({title, image, price, author, addToCompareBooks, id, webReaderLink }) => {

    return (

        <div className="card">
            <div className="card__cont">
                <div className="card__overlay">
                    <img className="book-icon" src="/like.svg" alt="#"/>
                    <img className="book-comparison" src="/balance.svg" alt="#"/>
                    <a className='preview' target={'_blank'} href={webReaderLink}>preview</a>
                    <div className="buy">
                        {/*<p className='cart'>Add to cart </p>*/}
                        {/*<img src="/icon.svg" alt="#" className='card__info'/>*/}
                        <img src="/shopping-cart.svg" alt="#" className='cart-icon'/>
                    </div>
                </div>
                <img className="card__pic" src={image}/>
            </div>

            <h4 className="card__title">{title}</h4>
            <p className="card__author">{author}</p>
            <p className="card__price">{price} грн</p>
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
{/*<div className="book-card">*/}

{/*<div className="book-img__container">*/}
{/*<img className="book-card__img"*/}
{/*src={image}*/}
{/*alt="#"/>*/}

{/*/!*<img className="book-icon" src="/heart.svg" alt="#"/>*!/*/}
{/*<h4 className="book-card__subtitle">{title}</h4>*/}
{/*<img className="book-icon" src="/heart.svg" alt="#"/>*/}

{/*<a className="book-link" href={webReaderLink} target='_blank'> </a>*/}


{/*<div className="book-button--container">*/}
{/*<button className="book-button" type="submit"> </button>*/}
{/*<p className="book-add">Add To Cart</p>*/}
{/*</div>*/}

{/*<button onClick={() => addToCompareBooks(id, 'compare')} className="book-comparison"*/}
{/*type="submit"> </button>*/}
{/*</div>*/}

{/*<div className="book-author--container">*/}
{/*<h3 className="book-author">{author}</h3>*/}
{/*<p className="book-price">{price}₴</p>*/}

{/*</div>*/}

{/*</div>*/}