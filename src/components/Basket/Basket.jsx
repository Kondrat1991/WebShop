import React, {Fragment} from 'react';
import Card from '../Card/Card';
import './index.css'

const Basket = ({basket, toggleAddDeleteToArr, plus, minus, visibleBasket, clearBasket}) => {

    /*записываю в переменную newArr - массив со значениями из поля total: , чтобы потом использовать этот массив */
    let newArr = basket[0] && basket.map((el) => el.total);

    /*если в корзина пустая, то не применять метод reduce для массива newArr*/
    let b = basket.length < 1 ? null : newArr.reduce(function (sum, current) {return sum + current});

    /*переменная, которая пересчитывает сумму всех сумм*/
    let totalPrice =  basket.filter(obj => obj.saleInfo.listPrice).reduce((acc, book) => (
        (book.saleInfo.listPrice.amount * book.total) + acc
    ), 0);

    return(
        <Fragment>
            <div className={`wrap-basket ${visibleBasket ? 'active' : ''}`}>
                <ul className='wrap-ul'>
                    {basket[0] && basket.map((obj) => {
                        return (
                            <Card etag={obj.etag}
                                  key={obj.etag}
                                  price={obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 0}
                                  title={obj.volumeInfo.title}
                                  image={obj.volumeInfo.imageLinks.thumbnail}
                                  toggleAddDeleteToArr={toggleAddDeleteToArr}
                                  author={obj.volumeInfo.authors}
                                  total={obj.total}
                                  plus={plus}
                                  minus={minus}
                            />
                            )
                        }
                    )}
                </ul>
                <div>
                    <p>Amount total: {b}</p>
                    <p>Amount price: {totalPrice.toFixed(2)} ₴</p>
                    <div className='wrap-btn'>
                        <button className='button-buy'>BUY</button>
                        <button className='button-del' onClick={() => clearBasket()}>DEL</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Basket;