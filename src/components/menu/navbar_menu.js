import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MobileMenu from './mobile-menu';
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

    render() {

        return (
            <div>
            <span onClick={this.toggleDown.bind(this)}>
                <button className="btn btn-menu"/>
                {this.state.down && <MobileMenu/>}

                <DesktopMenu />
            </span>
            {/*<Menu className='desktop-menu'/>*/}
            </div>
        );
    }
}

NavbarMenu.propTypes = {};

export default NavbarMenu;
