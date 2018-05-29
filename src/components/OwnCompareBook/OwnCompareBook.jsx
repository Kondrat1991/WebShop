import React from 'react';

const OwnCompareBook = ({img, title, author, price, deleteCompareBooks}) => {
    return (
        <div onClick={deleteCompareBooks} className='own-compare'>
            <img src={img} alt="book" className='img-compare'/>
            <div className='text-compare'>
                <h3 className='title-compare'>{title}</h3>
                <p className='author-compare'>{author}</p>
                <p className='price-compare'>{price}</p>
            </div>
        </div>
    );
};

export default OwnCompareBook;
