import React from 'react';
import './index.css';

const OwnCompareBook = ({id, img, deleteCompareBooks}) => {
    return (
        <th className='th-component'>
            <img src={img} alt="book" className='img-compare'/>
            <button className='button-compare' onClick={() => deleteCompareBooks(id)}></button>
        </th>
    );
};

export default OwnCompareBook;

