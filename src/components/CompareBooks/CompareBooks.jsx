import React from "react";
import PropTypes from "prop-types";
import OwnCompareBook from "../OwnCompareBook/OwnCompareBook";
import "./index.css";

const CompareBooks = ({
                          toggleAddDeleteToArr,
                          compare,
                          webReaderLink,
                          renderPage
                      }) => {
    console.log(compare);
    return compare.length !== 0 ? (
        <div className="table-container">
            <table className="table">
                <thead>
                <tr className="container-compare">
                    <th className="th-empty"/>
                    {compare.map(obj => (
                        <OwnCompareBook
                            key={obj.etag}
                            etag={obj.etag}
                            img={obj.volumeInfo.imageLinks.thumbnail}
                            toggleAddDeleteToArr={toggleAddDeleteToArr}
                            webReaderLink={obj.accessInfo.webReaderLink}
                            renderPage={renderPage}
                        />
                    ))}
                </tr>
                </thead>
                <tbody className="tbody-text">
                <tr className="tr-container">
                    <th className="th-name">Title</th>
                    {compare.map(obj => (
                        <td key={obj.etag} className="td-container">
                            {obj.volumeInfo.title}
                        </td>
                    ))}
                </tr>
                <tr className="tr-container">
                    <th className="th-name">Authors</th>
                    {compare.map(obj => (
                        <td key={obj.etag} className="td-container">
                            {obj.volumeInfo.authors[0]}
                        </td>
                    ))}
                </tr>
                <tr className="tr-container">
                    <th className="th-name">Price</th>
                    {compare.map(obj => (
                        <td key={obj.etag} className="td-container td-container--price">
                            {obj.saleInfo.listPrice
                                ? obj.saleInfo.listPrice.amount
                                : "not for sale"}{" "}
                            грн
                        </td>
                    ))}
                </tr>
                <tr className="tr-container">
                    <th className="th-name">Page Count</th>
                    {compare.map(obj => (
                        <td key={obj.etag} className="td-container">
                            {obj.volumeInfo.pageCount}
                        </td>
                    ))}
                </tr>
                <tr className="tr-container">
                    <th className="th-name">Published Data</th>
                    {compare.map(obj => (
                        <td key={obj.etag} className="td-container">
                            {obj.volumeInfo.publishedDate}
                        </td>
                    ))}
                </tr>
                <tr className="tr-container">
                    <th className="th-name">Content Version</th>
                    {compare.map(obj => (
                        <td key={obj.etag} className="td-container">
                            {obj.volumeInfo.contentVersion}
                        </td>
                    ))}
                </tr>
                </tbody>
            </table>
        </div>
    ) : (
        <p className="book-noBook">
            You have entered the wrong request or maybe there are no such books
        </p>
    );
};

CompareBooks.propTypes = {
    compare: PropTypes.array,
    toggleAddDeleteToArr: PropTypes.func
};

export default CompareBooks;
