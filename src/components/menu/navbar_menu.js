import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DesktopMenu from './desktop-menu';
import {NavLink} from 'react-router-dom';


class NavbarMenu extends Component {
    state = {
        down: false,
    }

    toggleDown = ()=> {
        this.setState((prevState) => (
            {down: !prevState.down}
        ))
    }

    render() {
        return (
            <div>
            <div className='nav-container'>
                <button className="btn btn-menu" onClick={this.toggleDown}/>
                {this.state.down && <DesktopMenu />} /* if()*/

                {/*<DesktopMenu />*/}
            </div>
            </div>
        );
    }
}

NavbarMenu.propTypes = {};

export default NavbarMenu;
