import React from "react";
import Filter from "../filter/filter";
import BookContainer from "../BookContainer/BookContainer";
import Categories from "../Categories/Categories";
import "./home.css";

const Home = ({
                  library,
                  toggleAddDeleteToArr,
                  changeCategory,
                  renderPage,
                  sortBooks,
                  sortBooksForThree,
                  sortBooksDec,
                  sortFreeBook,
                  handler,
                  category,
                  toggleVisibleCategory,
                  visibleCategory
              }) => {
    return (
        <div className="main">
            <div className="wrapper-container">
                <button className="categories__btn" onClick={toggleVisibleCategory}>
                    Показать категории
                </button>
                <Categories
                    changeCategory={changeCategory}
                    visibleCategory={visibleCategory}
                    toggleVisibleCategory={toggleVisibleCategory}
                />
                <div className="bookcontainer-filter">
                    <Filter
                        library={library}
                        sortBooks={sortBooks}
                        sortBooksForThree={sortBooksForThree}
                        sortFreeBook={sortFreeBook}
                        sortBooksDec={sortBooksDec}
                        handler={handler}
                        category={category}
                    />
                    <BookContainer
                        library={library}
                        toggleAddDeleteToArr={toggleAddDeleteToArr}
                        renderPage={renderPage}
                        sortBooks={sortBooks}
                        sortBooksForThree={sortBooksForThree}
                        sortFreeBook={sortFreeBook}
                        sortBooksDec={sortBooksDec}
                        handler={handler}
                        category={category}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
