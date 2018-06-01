import React from 'react';
import PropTypes from 'prop-types';
import BookContainer from '../BookContainer/BookContainer';
// import Filter from './components/filter/filter';
// import Categories from '.components/categories/categories';
import WishList from "../WishList/WishList";
import {Route, Switch} from 'react-router-dom';

const Main = ({library, wishList, toggleAddDeleteToArr}) => {
    return (
        <div className='main--container'>
            <div className='main'>
                <div className='side-bar'>
                    {/*<Categories library={library}/>*/}
                    {/*<Filter library={library}/>*/}
                </div>
                <div className='gallery'>
                    {wishList[0] &&
                    <WishList wishList={wishList}
                              toggleAddDeleteToArr={toggleAddDeleteToArr}
                    />
                    }
                    <BookContainer library={library}
                                   toggleAddDeleteToArr={toggleAddDeleteToArr}
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
