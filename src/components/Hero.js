import React from 'react';
import Data from '../model/Data';

const Hero = ({ handleLogOut }) => {

    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <Data />
        </section>
    );
};

export default Hero;