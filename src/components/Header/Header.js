import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="hero-description">
                <h1>Welcome</h1>
                <p> If you are building a hybrid app (some UIs in React Native, some UIs in platform code) you can still use images that are already bundled into the app. </p>
            </div>
            <div className="hero-illustration">
                <img src={process.env.PUBLIC_URL + '/images/Hero.svg'} className="hero-img"></img>
            </div>
        </div>
    )
}

export default Header;