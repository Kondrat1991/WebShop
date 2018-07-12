import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
import './Categories.css'


const Categories = ({library, changeCategory, visibleCategory}) => {

    return (
        <Fragment>

            <div className={visibleCategory ? 'categories categories-active' : 'categories'}>
                {/*<button className='categories__btn' onClick={()=> toggleVisibleCategory}>Показать категрии</button>*/}
                <h2 className='categories__title'>Categories</h2>
                <ul className='categories--list'>

                    <li className='categories__item' onClick={() => changeCategory('computer')}>
                        Computer
                    </li>
                    <li className='categories__item' onClick={() => changeCategory('Business and Investing')}>
                        Business and Investing
                    </li>
                    <li className='categories__item' onClick={() => changeCategory('Childrens Books')}>
                        Childrens Books
                    </li>
                    <li className='categories__item' onClick={() => changeCategory('Computers and Technology')}>
                        Computers and Technology
                    </li>
                    <li className='categories__item' onClick={() => changeCategory('Cooking and Housekeeping')}>
                        Cooking and Housekeeping
                    </li>
                    <li className='categories__item' onClick={() => changeCategory(' Fiction and Literature')}>
                        Fiction and Literature
                    </li>
                    <li className='categories__item' onClick={() => changeCategory('Health and Sports')}>
                        Health and Sports
                    </li>
                    <li className='categories__item' onClick={() => changeCategory('History')}>
                        History
                    </li>
                    <li className='categories__item' onClick={() => changeCategory('Mystery and Trillers')}>
                        Mystery and Trillers
                    </li>
                    <li className='categories__item' onClick={() => changeCategory('Romance')}>
                        Romance
                    </li>
                    <li className='categories__item' onClick={() => changeCategory('Science Fiction and Fantasy')}>
                        Science Fiction and Fantasy
                    </li>

                </ul>
            </div>

        </Fragment>

    );
};

// Categories.propTypes = {};
// Categories.defaultProps = {};

export default Categories;
