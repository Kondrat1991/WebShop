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
  searchBook
}) => {
  return (
    <div className="main">
      {/*<SearchForm*/}
      {/*searchBook={searchBook}*/}
      {/*/>*/}

      <SearchForm searchBook={searchBook} />
      <div className="wrapper-container">
        <div className="side-bar">
          <Categories changeCategory={changeCategory} />
        </div>

        <div className="gallery">
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
        </div>
      </div>
    </div>
  );
};


export default Home;
