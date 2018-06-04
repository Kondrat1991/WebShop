import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../BookContainer/BookContainer';
// import Filter from './components/filter/filter';
// import Categories from '.components/categories/categories';
import {Route, Switch} from 'react-router-dom';
import "./main.css"

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


                <div className='gallery'>

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
                    </div>

                    <BookContainer library={library}
                                   addToCompareBooks={addToCompareBooks}
                    />
                </div>
            </div>
        </div>
    )
};

{/* Main.propTypes = {
    library: PropTypes.array

} */
}

export default Main;

