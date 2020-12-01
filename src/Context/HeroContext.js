import React, { useState, createContext, useEffect } from "react";

export const HeroContext = createContext();

export const HeroState = ({ children }) => {
    const API_Key = "1741527979362433";

    const [hiddenMenu, setHiddenMenu] = useState("true");
    const [activeLink, setActiveLink] = useState("popular");
    const [hero, setHero] = useState([]);

    const getHero = async () => {
        const heroResponse =
            await fetch("https://cors-anywhere.herokuapp.com/superheroapi.com/api/1741527979362433");
        const heroData = await heroResponse.json();
        setHero(heroData);
    };

    useEffect(() => {
        getHero();
    }, []);
    return (
        <HeroContext.Provider value={{ hiddenMenu, setHiddenMenu, activeLink, setActiveLink, hero }}>
            {children}
        </HeroContext.Provider>
    );
};