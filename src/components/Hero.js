import React from 'react';
import Data from '../model/Data';
import SuperheroSource from './SuperheroSource';


const Hero = ({ handleLogOut }) => {

    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <Data />
            <SuperheroSource />
        </section>
    );
};

export default Hero;