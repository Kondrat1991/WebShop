import React from 'react';
import PropTypes from 'prop-types';
import './Categories.css'


const Categories = ({active}) => {


    return (
        <div>

            <ul className='categories-list'>
                Genre
                {nameArr.filter((el) => (
                    if (
                    el.genre === 'action'
                    )
                {<li key={el.name} className='categories-info' onClick={active}>
                    <NavLink exact to={el.genre}>
                    Biographies and Memoirs
                    </li>}
                    )}

                <li className='categories-info' onClick={active}>
                    Business and Investing
                </li>
                <li className='categories-info' onClick={active}>
                    Childrens Books
                </li>
                <li className='categories-info' onClick={active}>
                    Computers and Technology
                </li>
                <li className='categories-info' onClick={active}>
                    Cooking and Housekeeping
                </li>
                <li className='categories-info' onClick={active}>
                    Fiction and Literature
                </li>
                <li className='categories-info' onClick={active}>
                    Health and Sports
                </li>
                <li className='categories-info' onClick={active}>
                    History
                </li>
                <li className='categories-info' onClick={active}>
                    Mystery and Trillers
                </li>
                <li className='categories-info' onClick={active}>
                    Romance
                </li>
                <li className='categories-info' onClick={active}>
                    Science Fiction and Fantasy
                </li>
            </ul>
        </div>
    );
};

Categories.propTypes = {};
Categories.defaultProps = {};

export default Categories;
