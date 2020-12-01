/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Data from '../../model/Data';
import SuperheroSource from '../SuperheroSource';
import HeroNav from "./HeroNav";
import Output from "../Output/Output";



const Hero = ({ handleLogOut }) => {

    return (
        <section css={styles} className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="logoutBtn" onClick={handleLogOut}>Logout</button>
            </nav>
            <Data />
            <SuperheroSource />
            <HeroNav />
            <Output />
        </section>
    );
};
const styles = css`
    width: 100%
    min-height:100%
    background: #1b1c22;

`;

export default Hero;
