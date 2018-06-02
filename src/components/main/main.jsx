import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../BookContainer/BookContainer';
// import Filter from './components/filter/filter';
// import Categories from '.components/categories/categories';
import {Route, Switch} from 'react-router-dom';

const Main = ({library, deleteCompareBooks, addToCompareBooks, searchBook}) => {
    let searchTitle;
    let select;

    return (
        <div className='main--container'>
            <div className='main'>
                <div className='side-bar'>
                    {/*<Categories library={library}/>*/}
                    {/*<Filter library={library}/>*/}
                </div>

                <div className="form-div">
                        <select ref={(inputSelect)=> {select = inputSelect}}>
                            <option>Choose language</option>
                            <option value="en">English</option>
                            <option value="ua">Українська</option>
                            <option value="ru">Русский</option>
                        </select>
                        <input ref={(inputText)=> {searchTitle = inputText}} type="text" name="displayValue" id="displayValue"
                               placeholder="Enter here your request"
                               />
                            <input name="idValue" id="idValue" type="hidden"/>
                            <button className="getValue" onClick={() => searchBook('', searchTitle.value, select.value)}> show </button>
                    </div>




                <div className='gallery'>
                    <BookContainer library={library}
                                   addToCompareBooks={addToCompareBooks}


                    />
                </div>
            </div>
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

