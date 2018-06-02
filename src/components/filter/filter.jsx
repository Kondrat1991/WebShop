import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import '../Categories/Categories.css'

const Filter = ({library, sortBooks, sortBooksForThree, sortBooksDec, sortFreeBook, handler, category}) => {
    // let price= library[0] && library.saleInfo.listPrice ? library.saleInfo.listPrice.amount : 'not for sale';
    // console.log(price);
    return (
        <div>
            <h2 className='categories-list'>Filter</h2>
            <ul>
                <li className='categories-info' onClick={() => handler(category)}>All Books</li>
                <li className='categories-info' onClick={() => sortBooksForThree('saleInfo', 'listPrice', 'amount')}>Price Increasing</li>
                <li className='categories-info' onClick={() => sortBooksDec('saleInfo', 'listPrice', 'amount')}>Price Decreasing</li>
                <li className='categories-info' onClick={() => sortFreeBook('saleInfo', 'listPrice', 'amount')}>Free Books</li>
                <li className='categories-info' onClick={() => sortBooks('volumeInfo','authors')}>Author alphabeticaly</li>
                <li className='categories-info' onClick={() => sortBooks('volumeInfo','publishedDate')}>Release Date</li>
            </ul>
        </div>
    )
};

export default Filter