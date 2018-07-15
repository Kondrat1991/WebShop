import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';

const OwnCompareBook = ({etag, img, toggleAddDeleteToArr, webReaderLink, renderPage}) => {
    return (
        <th className='th-component'>
            <img src={img} alt="book" className='img-compare'
            />
            <div className='th__overlay'>
                <img className="cp-book-icon" src="/like.svg" alt="#"
                     onClick={() => toggleAddDeleteToArr(etag, 'wishList')}
                />
                <img className="cp-book-comparison" src="/cross2.svg" alt="#"
                     onClick={() => toggleAddDeleteToArr(etag, 'compare')}
                />
                <a className='cp-preview' target={'_blank'} href={webReaderLink}>preview
                </a>
                <img src="/basket.png" alt="#" className='cp-cart-icon'
                     onClick={() => toggleAddDeleteToArr(etag, 'basket')}
                />
                <NavLink to='/page-book'>
                    <img className="cp-book-info" src="/icon.svg" alt="#"
                         onClick={() => renderPage(etag)}
                    />
                </NavLink>
            </div>
        </th>
    );
};

export default OwnCompareBook;

