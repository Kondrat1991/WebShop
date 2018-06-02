import React from 'react';
//import PropTypes from 'prop-types';
import BookCard from '../BookCard/BookCard';
import './index.css'
import BookPage from '../BookPage/bookPage';

const BookContainer = ({library, toggleAddDeleteToArr, renderPage}) => {

    return (
        <div className="book-section">
            {library.map((obj) => {
                return (
                    <div> 
                    <BookCard
                        key={obj.id}
                        price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
                        title={obj.volumeInfo.title}
                        image={obj.volumeInfo.imageLinks.thumbnail}
                        id={obj.id}
                        toggleAddDeleteToArr={toggleAddDeleteToArr}
                        renderPage={renderPage}
                    />
                    </div>
                )
            })}
        </div>
    );
};

// price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
/*BookContainer.propTypes = {};
BookContainer.defaultProps = {};*/

export default BookContainer;


