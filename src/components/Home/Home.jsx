import React from "react";
import BookContainer from "../BookContainer/BookContainer";
import Categories from "../Categories/Categories";
import "./home.css";
import SearchForm from "../SearchForm/SearchForm";

const Home = ({
                  library,
                  toggleAddDeleteToArr,
                  changeCategory,
                  bookPage,
                  renderPage,
                  sortBooks,
                  sortBooksForThree,
                  sortBooksDec,
                  sortFreeBook,
                  handler,
                  category,
                  searchBook,
                  toggleVisibleCategory,
                  visibleCategory
              }) => {
    return (
        <div className="main">
            {/*<SearchForm*/}
            {/*searchBook={searchBook}*/}
            {/*/>*/}

            {/* <SearchForm searchBook={searchBook} /> */}
            <div className="wrapper-container">
                <button className='categories__btn' onClick={toggleVisibleCategory}>Показать категории</button>
                {/*<div className="side-bar">*/}
                    <Categories changeCategory={changeCategory}
                                visibleCategory={visibleCategory}
                    />
                {/*</div>*/}
                {/*<div className="gallery">*/}
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
                    {/* <BookPage bookPage={bookPage}/> */}
                {/*</div>*/}
            </div>
        </div>
    );
};


export default Home;
