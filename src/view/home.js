import React from 'react';
import CharacterList from '../js/CharacterModel';

const Home = ({ handleLogOut }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <CharacterList />
        </section>
    );
};

export default Home;
