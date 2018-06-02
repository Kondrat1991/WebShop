import React from 'react';
import PropTypes from 'prop-types';
import WishList from '../WishList/WishList';
import BookContainer from '../BookContainer/BookContainer';
import Categories from '../Categories/Categories';
import Filter from '../filter/filter';
import './home.css'

const Home = ({library, toggleAddDeleteToArr, changeCategory, visibleCategory, toggleCategories, sortBooks, sortBooksForThree}) => {
  return (

        <div className='main'>
                <div className='side-bar'>
                    <Categories changeCategory={changeCategory} visibleCategory={visibleCategory}
                                toggleCategories={toggleCategories}/>
                    <Filter library={library} sortBooks={sortBooks} sortBooksForThree={sortBooksForThree}/>
                </div>
                <div className='gallery'>

                    <BookContainer library={library}
                                   toggleAddDeleteToArr={toggleAddDeleteToArr}
                    />
                </div>
        </div>

  )
}

Home.propTypes = {

}

export default Home
