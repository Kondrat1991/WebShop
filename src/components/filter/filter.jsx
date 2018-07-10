import React from "react";
// import PropTypes from 'prop-types';
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
  // let price= library[0] && library.saleInfo.listPrice ? library.saleInfo.listPrice.amount : 'not for sale';
  // console.log(price);
  return (
    <div>
      <div className="filter__container">
        <button className="filter__info" onClick={() => handler(category)}>
          All Books
        </button>
        <button
          className="filter__info"
          onClick={() => sortBooksForThree("saleInfo", "listPrice", "amount")}
        >
          Price Increasing
        </button>
        <button
          className="filter__info"
          onClick={() => sortBooksDec("saleInfo", "listPrice", "amount")}
        >
          Price Decreasing
        </button>
        <button
          className="filter__info"
          onClick={() => sortFreeBook("saleInfo", "listPrice", "amount")}
        >
          Free Books
        </button>
        <button
          className="filter__info"
          onClick={() => sortBooks("volumeInfo", "authors")}
        >
          Author alphabeticaly
        </button>
        <button
          className="filter__info"
          onClick={() => sortBooks("volumeInfo", "publishedDate")}
        >
          Release Date
        </button>
      </div>
    </div>
  );
};

export default Filter;
