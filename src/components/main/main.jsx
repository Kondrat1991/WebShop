import React from 'react';
import WishList from "../WishList/WishList";
import {Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';
import CompareBooks from '../CompareBooks/CompareBooks';
import BookPage from '../BookPage/bookPage';
import AboutUs from '../AboutUs/AboutUs';
import './main.css'

const Main = ({wishList, toggleAddDeleteToArr, library, compare, bookPage, renderPage, changeCategory, sortBooks, sortBooksForThree, sortFreeBook, sortBooksDec, handler, category,toggleVisibleCategory,visibleCategory}) => {
    return (
        <div className='main--container'>
            <Switch>
                <Route exact path='/'
                       render={() => <Home library={library}
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
                                           toggleVisibleCategory={toggleVisibleCategory}
                                           visibleCategory={visibleCategory}
                       />}
                />
                <Route path='/wish-list'
                       render={() => <WishList wishList={wishList}
                                               toggleAddDeleteToArr={toggleAddDeleteToArr}
                                               renderPage={renderPage}
                       />}/>
                <Route path='/compare-books'
                       render={() => <CompareBooks compare={compare}
                                                   toggleAddDeleteToArr={toggleAddDeleteToArr}
                                                   renderPage={renderPage}
                       />}/>
                <Route path='/page-book'
                       render={() => < BookPage bookPage={bookPage} renderPage={renderPage} toggleAddDeleteToArr={toggleAddDeleteToArr}/>}/>
                <Route path='/about_us'
                       component={AboutUs}/>
            </Switch>
        </div>
    )
};

export default Main;
