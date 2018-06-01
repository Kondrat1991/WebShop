import React from 'react';
import PropTypes from 'prop-types';
import WishList from '../WishList/WishList';
import BookContainer from '../BookContainer/BookContainer';

const Home = ({library, toggleAddDeleteToArr}) => {
  return (

        <div className='main'>
                <div className='side-bar'>
                    {/* <Categories library={library}/> */}
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
