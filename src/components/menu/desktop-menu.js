import React from 'react';
import {NavLink} from 'react-router-dom';
import './menu.css';

const menuList = [
    {
        path: '/',
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
        path: '/about_us',
        name: 'about us',
    },
]

const DesktopMenu = ({visibleMobileNav,toggleDown}) => {
    return (
        <nav className='nav'>
            <ul className='desktop-menu'>
                {menuList.map((item) => (
                    <li className="menu-list" key={item.name}>
                        <NavLink className="menu-link" to={item.path}>
                            {item.name}
                        </NavLink>
                    </li>))}
            </ul>

            <ul className={visibleMobileNav ?'desktop-menu-mobile desktop-menu-mobile-active':'desktop-menu-mobile'}>
            {/* <div className='desktop-menu-mobile-overlay'></div>  */}
                {menuList.map((item) => (
                    <li className="menu-list" key={item.name}>
                        <NavLink className="menu-link" to={item.path} onClick={()=>{toggleDown()}} >
                            {item.name}
                        </NavLink>
                    </li>))}
            </ul>
        </nav>
    )
};
export default DesktopMenu;
