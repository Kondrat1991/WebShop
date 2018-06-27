import React from 'react';
// import PropTypes from 'prop-types';
import BookContainer from '../BookContainer/BookContainer';
import Categories from '../Categories/Categories';
import Filter from '../filter/filter';
import './home.css';
import SearchForm from '../SearchForm/SearchForm'
//import SearchForm from '../SearchForm/SearchForm';


const Home = ({library, toggleAddDeleteToArr, changeCategory, bookPage, renderPage, sortBooks, sortBooksForThree, sortBooksDec, sortFreeBook, handler, category, searchBook}) => {
  return (

        <div className='main'>
            {/*<SearchForm*/}
                {/*searchBook={searchBook}*/}
            {/*/>*/}

            <SearchForm
                searchBook={searchBook}
            />
            <div className="wrapper-container">
            <div className='side-bar'>
                    <Categories changeCategory={changeCategory}
                    />
                    <Filter library={library}
                            sortBooks={sortBooks}
                            sortBooksForThree={sortBooksForThree}
                            sortFreeBook={sortFreeBook}
                            sortBooksDec={sortBooksDec}
                            handler={handler}
                            category={category}/>
                </div>


                <div className='gallery'>

                    <BookContainer library={library}
                                   toggleAddDeleteToArr={toggleAddDeleteToArr}
                                   renderPage={renderPage}
                    />
                    {/* <BookPage bookPage={bookPage}/> */}
                </div>
            </div>
        </div>
  )
};

// Home.propTypes = {
// //
// // };

export default Home;
