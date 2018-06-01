<<<<<<< HEAD
import React from 'react';
//import PropTypes from 'prop-types';
import BookCard from '../BookCard/BookCard';
import './index.css'

const BookContainer = ({library, toggleAddDeleteToArr}) => {

    return (
        <div className="book-section">
            {library.map((obj) => {
                return (
                    <BookCard
                        key={obj.etag}
                        price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
                        title={obj.volumeInfo.title}
                        image={obj.volumeInfo.imageLinks.thumbnail}
                        etag={obj.etag}
                        toggleAddDeleteToArr={toggleAddDeleteToArr}
                    />
                )
            })}
        </div>
    );
};

// price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
/*BookContainer.propTypes = {};
BookContainer.defaultProps = {};*/

export default BookContainer;


=======
import React from 'react';
//import PropTypes from 'prop-types';
import BookCard from '../BookCard/BookCard';
import './index.css'

const BookContainer = ({library, toggleAddDeleteToArr}) => {

    return (
        <div className="book-section">
            {library[0] && library.map((obj) => {
                return (
                    <BookCard
                        etag={obj.etag}
                        key={obj.etag}
                        price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
                        title={obj.volumeInfo.title}
                        image={obj.volumeInfo.imageLinks.thumbnail}
                        toggleAddDeleteToArr={toggleAddDeleteToArr}
                    />
                )
            })}


        </div>
    );
};

// price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
/*BookContainer.propTypes = {};
BookContainer.defaultProps = {};*/

export default BookContainer;


>>>>>>> db11f3b7b771c3abf66d5cb323d2c5fd3a3408b7
