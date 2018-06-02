import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../BookContainer/BookContainer';
// import Filter from './components/filter/filter';
// import Categories from '.components/categories/categories';
import WishList from "../WishList/WishList";
import {Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import CompareBooks from '../CompareBooks/CompareBooks';

const Main = ({wishList, toggleAddDeleteToArr, library, compare, bookPage, renderPage}) => {
    return (
        <div className='main--container'>
        <Switch>
            
            <Route exact path='/' render = {()=> <Home library={library} 
                        toggleAddDeleteToArr={toggleAddDeleteToArr} 
                        bookPage={bookPage}
                        renderPage={renderPage}/>} />
            <Route  path='/wish-list' render={()=> <WishList wishList={wishList} 
                    toggleAddDeleteToArr={toggleAddDeleteToArr}/>} /> 
            <Route path='/compare-books' 
                    render={ () => <CompareBooks compare={compare}
                    toggleAddDeleteToArr={toggleAddDeleteToArr}
                    /> }/>
            {/* <Route path='/about-us' path={AboutUs}/> */}
        </Switch>
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

} */
}

export default Main
