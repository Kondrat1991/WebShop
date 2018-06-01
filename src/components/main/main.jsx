import React from 'react';
import PropTypes from 'prop-types';
// import BookCard from './components/gallery/BookCard';
// import Filter from './components/filter/filter';
// import Categories from './components/Categories/Categories';
import BookContainer from '../BookContainer/BookContainer';
import {Route, Switch} from 'react-router-dom';

const Main = ({library}) => {
  return (
  <div className='main--container'>
    <div className='main'>
                <div className='side-bar'>
                    {/*<Categories library={library}/>*/}
                    {/*<Filter library={library}/>*/}
                </div>
                <div className='gallery'>
                    <BookContainer library={library}/>
                </div>
            </div>{/* <Switch>
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
  {/*<Categories library={library}/>*/}</div>
  )
}

{/* Main.propTypes = {
    library: PropTypes.array

} */}

export default Main
