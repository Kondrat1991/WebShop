import React from 'react';
import './index.css';

const OwnCompareBook = ({id, img, toggleAddDeleteToArr}) => {
    return (
        <th className='th-component'>
            <img src={img} alt="book" className='img-compare'/>
            <button className='button-compare' onClick={() => toggleAddDeleteToArr(id, 'compare')}></button>
            <button className='button-wish-list' onClick={() => toggleAddDeleteToArr(id, 'wishList')}></button> 
            <button className='button-basket' onClick={() => toggleAddDeleteToArr(id, 'basket')}></button> 
        </th>
    );
};

export default OwnCompareBook;

