import React from 'react';
import BookContainer from '../BookContainer/BookContainer';
import Categories from '../Categories/Categories';
import Filter from '../filter/filter';
import SearchForm from '../SearchForm/SearchForm';
import './home.css';

const Home = ({library, toggleAddDeleteToArr, changeCategory, bookPage, renderPage, sortBooks, sortBooksForThree, sortBooksDec, sortFreeBook, handler, category, searchBook}) => {
  return (

        <div className='main'>

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
                </div>
            </div>
        </div>
  )
};


export default Home;
