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

const Main = ({wishList, toggleAddDeleteToArr, library, compare, bookPage, renderPage, changeCategory, sortBooks, sortBooksForThree, sortFreeBook, sortBooksDec, handler, category, searchBook}) => {
    let searchTitle;
    let select;
    return (
        <div className='main--container'>
            <div className="form-div">
                <div className="form-input--container">
                    <select className="form-select" ref={(inputSelect) => {
                        select = inputSelect
                    }}>
                        <option>Choose language</option>
                        <option value="en">English</option>
                        <option value="ua">Українська</option>
                        <option value="ru">Русский</option>
                    </select>


                    <input className="form-input" ref={(inputText) => {
                        searchTitle = inputText
                    }} type="text" name="displayValue" id="displayValue"
                           placeholder="Search..."

                           onKeyPress={(event) => {
                               if (event.key === "Enter") {
                                   searchBook('', searchTitle.value, select.value);
                               }
                           }
                           }
                    />
                    {/*<input name="idValue" id="idValue" type="hidden"/>*/}

                    {/*<button className="getValue"*/}
                    {/*onClick={() => searchBook('', searchTitle.value, select.value)}> Show*/}
                    {/*</button>*/}


                    <button className="form-clear" onClick={() => searchTitle.value = ""}> </button>

                </div>
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
                           />}
                    />
                    <Route path='/wish-list' render={() => <WishList wishList={wishList}
                                                                     toggleAddDeleteToArr={toggleAddDeleteToArr}/>}/>
                    <Route path='/compare-books'
                           render={() => <CompareBooks compare={compare}
                                                       toggleAddDeleteToArr={toggleAddDeleteToArr}
                           />}/>
                    <Route path='/page-book' render={() => < BookPage bookPage={bookPage}/>}/>
                    {/* <Route path='/about-us' component={AboutUs}/> */}
                </Switch>
            </div>
        </div>
    )
}


export default Main


