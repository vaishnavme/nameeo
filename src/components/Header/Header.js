import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            
            <div className="hero-illustration">
                <img src={process.env.PUBLIC_URL + '/images/Hero.svg'} className="hero-img"></img>
            </div>
            <div className="hero-description">
                <h1>Welcome to NameeO</h1>
                <p className="text">Get creative name ideas for your new Project or Startup.</p>
                <ul className="features">
                    <li>
                        <p><b>🎴 Availability: </b> Check if name is avaiable to Register on new Domain.</p>
                    </li>
                    <li>
                        <p><b>🌿 Uniqueness: </b> Get list of all names accourding to your Keyword.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;