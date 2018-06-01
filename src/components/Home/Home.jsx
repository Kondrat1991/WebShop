import React from 'react';
import PropTypes from 'prop-types';
import WishList from '../WishList/WishList';
import BookContainer from '../BookContainer/BookContainer';
import Categories from '../Categories/Categories'

const Home = ({library, toggleAddDeleteToArr, changeCategory, visibleCategory, toggleCategories}) => {
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
                    />
                </div>
        </div>

  )
}

Home.propTypes = {

}

export default Home
