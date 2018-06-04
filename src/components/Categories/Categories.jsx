import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './Categories.css'


const Categories = ({library, changeCategory}) => {


    // let filterCategoriesComputer = (arr) => {
    //     console.log(arr)
    //     return arr.filter((item) => (
    //         item.volumeInfo.categories[0] === 'computer'
    //     ))
    // };

    return (
        <div>
            <h2 className='categories-list'>Categories</h2>
            <ul className='categories-list'>

                        <li className='categories-info' onClick={() => changeCategory('computer')}>
                            Computer
                        </li>
                        <li className='categories-info' onClick={() => changeCategory('Business and Investing') }>
                        Business and Investing
                        </li>
                        <li className='categories-info' onClick={() => changeCategory('Childrens Books')}>
                        Childrens Books
                        </li>
                        <li className='categories-info' onClick={() => changeCategory('Computers and Technology')}>
                        Computers and Technology
                        </li>
                        <li className='categories-info' onClick={() => changeCategory('Cooking and Housekeeping')}>
                        Cooking and Housekeeping
                        </li>
                        <li className='categories-info' onClick={() => changeCategory(' Fiction and Literature')}>
                        Fiction and Literature
                        </li>
                        <li className='categories-info' onClick={() => changeCategory('Health and Sports')}>
                        Health and Sports
                        </li>
                        <li className='categories-info' onClick={() => changeCategory('History')}>
                        History
                        </li>
                        <li className='categories-info' onClick={() => changeCategory('Mystery and Trillers')}>
                        Mystery and Trillers
                        </li>
                        <li className='categories-info' onClick={() => changeCategory('Romance')}>
                        Romance
                        </li>
                        <li className='categories-info' onClick={() => changeCategory('Science Fiction and Fantasy')}>
                        Science Fiction and Fantasy
                        </li>

            </ul>
        </div>
    );
};

Categories.propTypes = {};
Categories.defaultProps = {};

export default Categories;
