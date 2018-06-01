import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../BookContainer/BookContainer'
import './WishList.css'

const WishList = ({wishList, toggleAddDeleteToArr}) => {
        return (
            <div className='wishList__page'>
                <h2>Wish List Page</h2>
                <BookContainer library={wishList}
                               toggleAddDeleteToArr={toggleAddDeleteToArr}/>
            </div>
        );
};

WishList.propTypes = {
    wishList: PropTypes.array,
    toggleToWishList: PropTypes.func.isRequired,
};

export default WishList;


// Метод, который добавляет/удаляет карточки в/из пожеланий, метод передать в Мишин комппонент отрисовки карточки
// toggleToWishList = (id) => {
//     if (!this.state.wishList.some((obj) => obj.id === id )) {
//         const findId = this.state.library.find(el => el.id === id);
//         this.setState((prevState) => ({
//                 wishList: [
//                     ...prevState.wishList, findId
//                 ]
//             })
//         )
//     } else {
//         const filterArrOfWishList = this.state.wishList.filter((obj) => obj.id !== id);
//         this.setState({
//             wishList: filterArrOfWishList,
//         })
//     }
// };

