import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import balance2 from "./img/balance2.svg";
import icon2 from "./img/icon2.svg";
import like2 from "./img/like2.svg";
import shoppingCart from  "./img/shopping-cart2.svg";
import "./index.css";

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
                        src={like2}
                        alt="#"
                        title="add to wish list"
                        onClick={() => toggleAddDeleteToArr(etag, "wishList")}
                    />
                    <img
                        className="book-comparison"
                        src={balance2}
                        alt="#"
                        title="add to compare"
                        onClick={() => toggleAddDeleteToArr(etag, "compare")}
                    />
                    <a className="preview" target={"_blank"} href={webReaderLink}>
                        preview
                    </a>
                    <div className="buy">
                        <img
                            src={shoppingCart} // "/basket.png"
                            alt="#"
                            title="add to basket"
                            className="cart-icon"
                            onClick={() => toggleAddDeleteToArr(etag, "basket")}
                        />

                        <NavLink to="/page-book">
                            <img
                                title="about book"
                                className="book-info"
                                src={icon2}  // "/icon.svg"
                                alt="#"
                                onClick={() => renderPage(etag)}
                            />
                        </NavLink>
                    </div>
                </div>

                <img className="card__pic" src={image} alt="#"/>
            </div>
            <div className="card__info-book">
                <h4 className="card__title">{title}</h4>
                <p className="card__author">{author}</p>
                <p className="card__price">{price} грн</p>
                <div className="mobile">
                    <a className="mobile__preview" target={"_blank"} href={webReaderLink}>
                        preview
                    </a>
                    <NavLink to="/page-book">
                        <img
                            title="about book"
                            className="mobile__book-info"
                            src="/inform.svg"
                            alt="#"
                            onClick={() => renderPage(etag)}
                        />
                    </NavLink>
                    <img
                        className="mobile__book-comparison"
                        src="/weight.svg"
                        alt="#"
                        title="add to compare"
                        onClick={() => toggleAddDeleteToArr(etag, "compare")}
                    />
                    <img
                        src="/shopping-cart.svg"
                        alt="#"
                        title="add to basket"
                        className="mobile__cart-icon"
                        onClick={() => toggleAddDeleteToArr(etag, "basket")}
                    />
                    <img
                        className="mobile__book-icon"
                        src="/heartblack.svg"
                        alt="#"
                        title="add to wish list"
                        onClick={() => toggleAddDeleteToArr(etag, "wishList")}
                    />
                </div>
            </div>
        </div>
    );
};
BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};
BookCard.defaultProps = {
    image: "/no-img.jpg",
    author: "undefined Author"
};

export default BookCard;
