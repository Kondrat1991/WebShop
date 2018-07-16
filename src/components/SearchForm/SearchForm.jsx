import React from "react";

import "./index.css";

const SearchForm = ({searchBook}) => {
    let searchTitle;
    let select;
    return (
        <div className="form-div">
            <div className="form-input--container">
                <input
                    className="form-input"
                    ref={inputText => {
                        searchTitle = inputText;
                    }}
                    type="text"
                    name="displayValue"
                    id="displayValue"
                    placeholder=" "
                    onKeyPress={event => {
                        searchBook(event, "", searchTitle.value, select.value);
                    }}
                />
                <button
                    className="form-search"
                    onClick={() => (searchTitle.value = "")}
                >
                    {" "}
                </button>
                <button className="form-clear" onClick={() => (searchTitle.value = "")}>
                    {" "}
                </button>

                <select
                    className="form-select"
                    ref={inputSelect => {
                        select = inputSelect;
                    }}
                >
                    <option className="form-option" value="en">
                        English
                    </option>
                    <option className="form-option" value="ua">
                        Українська
                    </option>
                    <option className="form-option" value="ru">
                        Русский
                    </option>
                </select>
            </div>
        </div>
    );
};

export default SearchForm;
