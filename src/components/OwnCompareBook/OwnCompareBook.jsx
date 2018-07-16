import React from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
import like2 from './like2.svg';
import cross2 from './cross2.svg';
import shopping_cart2 from './shopping-cart2.svg';
import icon2 from './icon2.svg';

const OwnCompareBook = ({etag, img, toggleAddDeleteToArr, webReaderLink, renderPage}) => {
    return (
        <th className='th-component'>
            <img src={img} alt="book" className='img-compare'
            />
            <div className='th__overlay'>
                <img className="cp-book-icon" src={like2} alt="#"
                     onClick={() => toggleAddDeleteToArr(etag, 'wishList')}
                />
                <img className="cp-book-comparison" src={cross2} alt="#"
                     onClick={() => toggleAddDeleteToArr(etag, 'compare')}
                />
                <a className='cp-preview' target={'_blank'} href={webReaderLink}>preview
                </a>
                <img src={shopping_cart2} alt="#" className='cp-cart-icon'
                     onClick={() => toggleAddDeleteToArr(etag, 'basket')}
                />
                <NavLink to='/page-book'>
                    <img className="cp-book-info" src={icon2} alt="#"
                         onClick={() => renderPage(etag)}
                    />
                </NavLink>
            </div>
        </th>
    );
};

export default OwnCompareBook;

