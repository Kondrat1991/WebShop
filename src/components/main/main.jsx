import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../BookContainer/BookContainer';
// import Filter from './components/filter/filter';
// import Categories from '.components/categories/categories';
import WishList from "../WishList/WishList";
import {Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import CompareBooks from '../CompareBooks/CompareBooks';
import BookPage from '../BookPage/bookPage';

const Main = ({wishList, toggleAddDeleteToArr, library, compare, bookPage, renderPage, changeCategory, sortBooks, sortBooksForThree, sortFreeBook, sortBooksDec, handler, category}) => {
    return (
        <div className='main--container'>
        <Switch>
            
            <Route exact path='/' 
                    render = {()=> <Home library={library} 
                                        toggleAddDeleteToArr={toggleAddDeleteToArr} 
                                        bookPage={bookPage}
                                        renderPage={renderPage}
                                        changeCategory={changeCategory}
                                        sortBooks={sortBooks}
                                        sortBooksForThree={sortBooksForThree}
                                        sortFreeBook={sortFreeBook}
                                        sortBooksDec={sortBooksDec}
                                        handler={handler}
                                        category={category}
                                        />} 
            />
            <Route  path='/wish-list' render={()=> <WishList wishList={wishList} 
                    toggleAddDeleteToArr={toggleAddDeleteToArr}/>} /> 
            <Route path='/compare-books' 
                    render={ () => <CompareBooks compare={compare}
                    toggleAddDeleteToArr={toggleAddDeleteToArr}
                    /> }/>
            <Route path='/page-book' render ={ () => < BookPage bookPage={bookPage}/>}/>
            {/* <Route path='/about-us' component={AboutUs}/> */}
        </Switch>
        </div>
    )
}

{/* Main.propTypes = {
    library: PropTypes.array

} */
}

export default Main


