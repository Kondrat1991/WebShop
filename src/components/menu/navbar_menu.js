import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DesktopMenu from './desktop-menu';
import {NavLink} from 'react-router-dom';


class NavbarMenu extends Component {
    state = {
        down: false,
    };

    toggleDown = () => {
        this.setState((prevState) => (
            {down: !prevState.down}
        ))
    };

    render() {

        return (
            <div>
                <div className='nav-container'>
                    <button className="btn btn-menu" onClick={this.toggleDown}>

                        <div className={`btn-menu-line1 ${this.state.down && 'btn-menu-line1-active'}`}>
                        </div>

                        <div className={`btn-menu-line2 ${this.state.down && 'btn-menu-line2-active'}`}>
                        </div>

                        <div className={`btn-menu-line3 ${this.state.down && 'btn-menu-line3-active'}`}>
                        </div>

                    </button>
                    {this.state.down && <DesktopMenu visibleMobileNav={this.state.down} toggleDown={this.toggleDown}/>}

                    {/*<DesktopMenu />*/}
                </div>
            </div>
        );
    }
}


export default NavbarMenu;
