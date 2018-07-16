import React from "react";
import "./filter.css";

const Filter = ({
                    library,
                    sortBooks,
                    sortBooksForThree,
                    sortBooksDec,
                    sortFreeBook,
                    handler,
                    category
                }) => {
    return (
        <div>
            <div className="filter__container">
                <button className="filter__btn" onClick={() => handler(category)}>
                    All Books
                </button>
                <button
                    className="filter__btn"
                    onClick={() => sortBooksForThree("saleInfo", "listPrice", "amount")}
                >
                    Price Increasing
                </button>
                <button
                    className="filter__btn"
                    onClick={() => sortBooksDec("saleInfo", "listPrice", "amount")}
                >
                    Price Decreasing
                </button>
                <button
                    className="filter__btn"
                    onClick={() => sortFreeBook("saleInfo", "listPrice", "amount")}
                >
                    Free Books
                </button>
                <button
                    className="filter__btn"
                    onClick={() => sortBooks("volumeInfo", "authors")}
                >
                    Author alphabeticaly
                </button>
                <button
                    className="filter__btn"
                    onClick={() => sortBooks("volumeInfo", "publishedDate")}
                >
                    Release Date
                </button>
            </div>
        </div>
    );
};

export default Filter;
