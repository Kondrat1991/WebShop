import React from 'react';
import PropTypes from 'prop-types';
// import BookCard from './components/gallery/BookCard';
// import Filter from './components/filter/filter';
// import Categories from '.components/categories/categories';
import {Route, Switch} from 'react-router-dom';

const Main = ({library}) => {
  return (
  <div className='main--container'>
    {/* <Switch>
        <Route exact to='/' path= {Home} >
            <div className='main'>
                <div className='side-bar'>
                    <Categories library={library}/>
                    <Filter library={library}/>
                </div>
                <div className='gallery'>
                    <BookCard library={library}>
                </div>
            </div>
        </Route>
        <Route to='/about-us' path={AboutUs}/>
        <Route to='Page' path={PageBookCard}/>
    </Switch> */}
  </div>
  )
}

{/* Main.propTypes = {
    library: PropTypes.array

} */}

export default Main
