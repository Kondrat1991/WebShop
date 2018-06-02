import React from 'react';
import PropTypes from 'prop-types';
import WishList from '../WishList/WishList';
import BookContainer from '../BookContainer/BookContainer';
import BookPage from '../BookPage/bookPage';
import Categories from '../Categories/Categories';
import Filter from '../filter/filter';
import './home.css'


const Home = ({library, toggleAddDeleteToArr, changeCategory, bookPage, renderPage, sortBooks, sortBooksForThree, sortBooksDec, sortFreeBook, handler, category}) => {
  return (
        <div className='main'>
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
  )
}

Home.propTypes = {

}

export default Home
