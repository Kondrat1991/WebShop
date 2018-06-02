import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DesktopMenu from './desktop-menu';
import {NavLink} from 'react-router-dom';


const menuList = [
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/catalog',
        name: 'catalog',
    },
    {
        path: '/wish_list',
        name: 'wish list',
    },
    {
        path: '/compare',
        name: 'compare',
    },
    {
        path: '/basket',
        name: 'basket',
    },
    {
        path: '/search',
        name: 'search',
    },
    {
        path: '/about_us',
        name: 'about us',
    },
]

class NavbarMenu extends Component {
    state = {
        down: false,
    }

    toggleDown () {
        this.setState((prevstate)=> (
            {down: !prevstate.down}
        ))
    }
    // toggleDown () {
    //     this.setState(
    //         {down: true}
    //     )
    // }
    render() {

        return (
            <div>
            <div className='nav-container'>
                <button className="btn btn-menu" onClick={this.toggleDown.bind(this)}/>
                {this.state.down && <DesktopMenu />}

                {/*<DesktopMenu />*/}
            </div>
            {/*<Menu className='desktop-menu'/>*/}
            </div>
        );
    }
}

NavbarMenu.propTypes = {};

export default NavbarMenu;
