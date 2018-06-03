import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Data from './Data';
import './AboutUs.css'
// import n from './Mich.jpg'

const AboutUs = (props) => {
    return (
        <Fragment>
            {Data.map((el) =>  <div id="wrapper">
                <div className="header-card">
                    <div className="name">
                        <h1>{el.name}</h1>
                        <div className="mline"></div>
                    </div>
                    <img src={el.avatar} alt={el.name}/>
                </div>
                <div className="info">
                    <p>
                        <i className="fa fa-bandcamp" aria-hidden="true"></i>
                        <span className="bold">{el.country}</span>
                        <p>
                            <span>{el.prof}</span>
                        </p>
                    </p>
                </div>
                <ul className="contacts">
                    <li><a href={el.facebook}target='_blank'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li><a href={el.email}target='_blank'><i className="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                </ul>
                <div className="button">
                    <a href={el.github} target='_blank' className="follow">GitHub</a>
                </div>
                <div className="line"></div>

                <div className="line"></div>
                <div className="footer">
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
            </div>)}
        </Fragment>
    )
};

AboutUs.propTypes = {};
AboutUs.defaultProps = {};

export default AboutUs;
