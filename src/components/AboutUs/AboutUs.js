import React from 'react';
// import PropTypes from 'prop-types';
import Data from './Data';
import './AboutUs.css';

const AboutUs = (props) => {
    return (
        <div className='happy'>
            {Data.map((el) =>

                <div id="wrapper" key={el.name}>
                    <div className="header-card">
                        <img className='avatar' src={el.avatar} alt={el.name}/>
                    </div>
                    <div className="info">
                        <p>
                            <i className="fab fa-bandcamp" aria-hidden="true"> </i>
                            <span className="bold">{el.country}, </span>

                            <span className="level">{el.prof}</span>
                        </p>
                    </div>
                    <div className="name">
                        <h1 className='name-name'>
                            {el.name}
                        </h1>
                        <div className="mline"/>
                    </div>
                    <ul className="contacts">
                        <li>
                            <a href={el.facebook} title="go to Facebook page"
                               target='_blank'>
                                <i className="fab fa-facebook" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href={el.linkedin} title="go to Linkedin page"
                               target='_blank'>
                                <i className="fab fa-linkedin" aria-hidden="true" />
                                {/*<i className="fa fa-envelope-o" aria-hidden="true"/>*/}
                            </a>
                        </li>
                    </ul>
                    <div className="button">
                        <a href={el.github}
                           target='_blank'
                           className="follow">
                            GitHub
                        </a>
                    </div>

                    <div className="line"/>
                    <div className="line"/>
                    {/*<div className="footer">*/}
                    {/*<i className="fa fa-arrow-up" aria-hidden="true"></i>*/}
                    {/*</div>*/}
                </div>)}
        </div>
    )
};

// AboutUs.propTypes = {};
// AboutUs.defaultProps = {};

export default AboutUs;
