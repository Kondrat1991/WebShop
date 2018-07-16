import React, {Fragment} from "react";
import Card from "../Card/Card";
import "./index.css";

const Basket = ({
                    basket,
                    toggleAddDeleteToArr,
                    plus,
                    minus,
                    visibleBasket,
                    clearBasket
                }) => {
    /*записываю в переменную newArr - массив со значениями из поля total: , чтобы потом использовать этот массив */
    let newArr = basket[0] && basket.map(el => el.total);

    /*если в корзина пустая, то не применять метод reduce для массива newArr*/
    let amountTotal =
        basket.length < 1
            ? null
            : newArr.reduce(function (sum, current) {
                return sum + current;
            });

    /*переменная, которая пересчитывает сумму всех сумм*/
    let totalPrice = basket
        .filter(obj => obj.saleInfo.listPrice)
        .reduce(
            (acc, book) => book.saleInfo.listPrice.amount * book.total + acc,
            0
        );

    return (
        <Fragment>
            <div
                className={`wrap-basket ${basket[0] && visibleBasket ? "active" : ""}`}
            >
                <h2 className="basket-title">Your basket</h2>
                <div className="wrap-ul-scroll">
                    <ul className="wrap-ul basket-text">
                        {basket[0] &&
                        basket.map(obj => {
                            return (
                                <Card
                                    etag={obj.etag}
                                    key={obj.etag}
                                    price={
                                        obj.saleInfo.listPrice ? obj.saleInfo.listPrice.amount : 0
                                    }
                                    title={obj.volumeInfo.title}
                                    image={obj.volumeInfo.imageLinks.thumbnail}
                                    toggleAddDeleteToArr={toggleAddDeleteToArr}
                                    author={obj.volumeInfo.authors}
                                    total={obj.total}
                                    plus={plus}
                                    minus={minus}
                                />
                            );
                        })}
                    </ul>
                </div>
                <div className="wrap-amount">
                    <p className="amount-title">
                        Amount total:{" "}
                        <span className="amount-value">{amountTotal}</span>
                    </p>
                    <p className="amount-title">
                        Amount price:{" "}
                        <span className="amount-value">{totalPrice.toFixed(2)} ₴</span>
                    </p>
                </div>
                <div className="wrap-btn">
                    <button className="button-buy">Buy</button>
                    <button className="button-del" onClick={() => clearBasket()}>
                        Delete
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default Basket;
