import React, {Fragment} from 'react';
import './Categories.css'


const Categories = ({library, changeCategory, visibleCategory, toggleVisibleCategory}) => {

    return (
        <Fragment>

            <div className={visibleCategory ? 'categories-overlay categories-overlay-active' : 'categories-overlay'}
                 onClick={toggleVisibleCategory}>
            </div>

            <div className={visibleCategory ? 'categories categories-active' : 'categories'}

            >
                <h2 className='categories__title'>Categories</h2>
                <ul className='categories--list'>

                    <li className='categories__item' onClick={() => {
                        changeCategory('computer');
                        toggleVisibleCategory()
                    }}>
                        Computer
                    </li>
                    <li className='categories__item' onClick={() => {
                        changeCategory('Business and Investing');
                        toggleVisibleCategory()
                    }}>
                        Business and Investing
                    </li>
                    <li className='categories__item' onClick={() => {
                        changeCategory('Childrens Books');
                        toggleVisibleCategory()
                    }}>
                        Childrens Books
                    </li>
                    <li className='categories__item' onClick={() => {
                        changeCategory('Computers and Technology');
                        toggleVisibleCategory()
                    }}>
                        Computers and Technology
                    </li>
                    <li className='categories__item' onClick={() => {
                        changeCategory('Cooking and Housekeeping');
                        toggleVisibleCategory()
                    }}>
                        Cooking and Housekeeping
                    </li>
                    <li className='categories__item' onClick={() => {
                        changeCategory(' Fiction and Literature');
                        toggleVisibleCategory()
                    }}>
                        Fiction and Literature
                    </li>
                    <li className='categories__item' onClick={() => {
                        changeCategory('Health and Sports');
                        toggleVisibleCategory()
                    }}>
                        Health and Sports
                    </li>
                    <li className='categories__item' onClick={() => {
                        changeCategory('History');
                        toggleVisibleCategory()
                    }}>
                        History
                    </li>
                    <li className='categories__item' onClick={() => {
                        changeCategory('Mystery and Trillers');
                        toggleVisibleCategory()
                    }}>
                        Mystery and Trillers
                    </li>
                    <li className='categories__item' onClick={() => {
                        changeCategory('Romance');
                        toggleVisibleCategory()
                    }}>
                        Romance
                    </li>
                    <li className='categories__item' onClick={() => {
                        changeCategory('Science Fiction and Fantasy');
                        toggleVisibleCategory()
                    }}>
                        Science Fiction and Fantasy
                    </li>

                </ul>
            </div>

        </Fragment>

    );
};


export default Categories;
