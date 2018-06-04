import React from 'react';
//import PropTypes from 'prop-types';
import BookCard from '../BookCard/BookCard';
import './index.css'

const BookContainer = ({library, addToCompareBooks,}) => {

    return (
        <div className="book-section">


            { library[0] ? library.map((obj) => {

                return (
                    <BookCard
                        id={obj.etag}
                        key={obj.etag}
                        price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
                        title={obj.volumeInfo.title}
                        image={obj.volumeInfo.imageLinks.thumbnail}
                        author={obj.volumeInfo.authors}
                        //props from main
                        addToCompareBooks={addToCompareBooks}
                        webReaderLink={obj.accessInfo.webReaderLink}

                    />


                )
            })
            : <p className="book-noBook">You have entered the wrong request or maybe there are no such books</p>
            }


        </div>
    );
};



// price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
/*BookContainer.propTypes = {};
BookContainer.defaultProps = {};*/

export default BookContainer;


// {library[0] && library.map((obj) => {
//
//     return (
//         <BookCard
//             id={obj.etag}
//             key={obj.etag}
//             price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 'not for sale'}
//             title={obj.volumeInfo.title}
//             image={obj.volumeInfo.imageLinks.thumbnail}
//             author={obj.volumeInfo.authors}
//             //props from main
//             addToCompareBooks={addToCompareBooks}
//             webReaderLink={obj.accessInfo.webReaderLink}
//
//         />
//     )
// })}


