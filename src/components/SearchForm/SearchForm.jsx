import React from 'react';
//import PropTypes from 'prop-types';
import './index.css';


const SearchForm = ({searchBook}) => {
    // console.log(searchBook('', "harry", 'en' ));
    let searchTitle;
    let select;
    return (
        <div className="form-div">
            <div className="form-input--container">
                <select className="form-select" ref={(inputSelect) => {
                    select = inputSelect;
                }}>
                    <option>Choose language</option>
                    <option value="en">English</option>
                    <option value="ua">Українська</option>
                    <option value="ru">Русский</option>
                </select>


                <input className="form-input" ref={(inputText) => {
                    searchTitle = inputText;
                }} type="text" name="displayValue" id="displayValue"
                       placeholder="Search..."

                       onKeyPress={(event) => {
                               searchBook(event, '', searchTitle.value, select.value);
                       }
                       }
                />
                <button className="form-clear" onClick={() => searchTitle.value = ""}> </button>

            </div>
        </div>
    )
};

export default SearchForm;





