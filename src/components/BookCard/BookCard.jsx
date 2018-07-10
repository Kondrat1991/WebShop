import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { NavLink } from "react-router-dom";

const BookCard = ({
  title,
  image,
  price,
  etag,
  author,
  toggleAddDeleteToArr,
  webReaderLink,
  renderPage
}) => {
  return (
    <div className="card">
      <div className="card__cont">
        <div className="card__overlay">
          <img
            className="book-icon"
            src="/like.svg"
            alt="#"
            title='add to wish list'
             onClick={() => toggleAddDeleteToArr(etag, "wishList")}
          />
          {/* <a className="book-icon" href="#"  title='add to wish list' onClick={() => toggleAddDeleteToArr(etag, "wishList")}><svg class="svg-class" xmlns="/like.svg"></svg></a> */}
          <img
            className="book-comparison"
            src="/balance.svg"
            alt="#"
            title='add to compare'
            onClick={() => toggleAddDeleteToArr(etag, "compare")}
          />
          <a className="preview" target={"_blank"} href={webReaderLink}>
            preview
          </a>
          <div className="buy">
            <img
              src="/shopping-cart.svg"
              alt="#"
              title='add to basket'
              className="cart-icon"
              onClick={() => toggleAddDeleteToArr(etag, "basket")}
            />

            <NavLink to="/page-book">
              <img
                title='about book'
                className="book-info"
                src="/icon.svg"
                alt="#"
                onClick={() => renderPage(etag)}
              />
            </NavLink>
          </div>
        </div>

        <img className="card__pic" src={image} alt="#" />
      </div>

      <h4 className="card__title">{title}</h4>
      <p className="card__author">{author}</p>
      <p className="card__price">{price} грн</p>
    </div>
  );
};
BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
  // author: PropTypes.string.isRequired
};
BookCard.defaultProps = {
  image: "/no-img.jpg",
  author: "undefined Author"
};

export default BookCard;
