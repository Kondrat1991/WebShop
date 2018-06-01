import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './menu.css';

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
        path: '/wish-list',
        name: 'wish list',
    },
    {
        path: '/compare-books',
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

const DesktopMenu = ({className}) => {
    return (
        <nav className='nav'>
            <ul className='desktop-menu'>
                {menuList.map((item) => (
                    <li className="menu-list" key={item.name}>
                        <NavLink className="menu-link"  to={item.path}>
                            {item.name}
                        </NavLink>
                    </li>))}
            </ul>
        </nav>
    )
}
export default DesktopMenu;
