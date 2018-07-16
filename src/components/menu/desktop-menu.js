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

const DesktopMenu = ({visibleMobileNav, toggleDown}) => {
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


            <ul className={visibleMobileNav ? 'desktop-menu-mobile desktop-menu-mobile-active' : 'desktop-menu-mobile'}>
                {menuList.map((item) => (
                    <li className="menu-list" key={item.name}>
                        <NavLink className="menu-link" to={item.path} onClick={() => {
                            toggleDown()
                        }}>
                            {item.name}
                        </NavLink>
                    </li>))}

                <div className="mobile-nav">

                    <img
                        className="mobile-nav__book-comparison"
                        src="/weight.svg"
                        alt="#"
                        title="add to compare"
                    />
                    <img
                        src="/about_us.svg"
                        alt="#"
                        className="mobile-nav__about-icon"
                    />
                    <img
                        src="/catalog-tablet.svg"
                        alt="#"
                        className="mobile-nav__catalog-icon"
                    />
                    <img
                        className="mobile-nav__book-icon"
                        src="/heartblack.svg"
                        alt="#"
                        title="add to wish list"
                    />
                </div>
            </ul>
        </nav>
    )
};
export default DesktopMenu;
