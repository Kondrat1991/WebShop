import React from 'react';
import PropTypes from 'prop-types';
import WishList from '../WishList/WishList';
import BookContainer from '../BookContainer/BookContainer';
import BookPage from '../BookPage/bookPage';
import Categories from '../Categories/Categories';
import './home.css'


const Home = ({library, toggleAddDeleteToArr, changeCategory, visibleCategory, toggleCategories, bookPage, renderPage}) => {
  return (

        <div className='main'>
                <div className='side-bar'>
                    <Categories changeCategory={changeCategory} visibleCategory={visibleCategory}
                                toggleCategories={toggleCategories}/>
                    {/*<Filter library={library}/>*/}
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
