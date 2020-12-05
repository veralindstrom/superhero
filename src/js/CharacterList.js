import React, { useState, useEffect } from 'react';
import Character from './Character';

const CharacterList = () =>{
    //const API_KEY = '1741527979362433';
    const featureUrl = 'https://www.superheroapi.com/api.php/1741527979362433/search/a';
    const searchUrl = 'https://www.superheroapi.com/api.php/1741527979362433/search/';

    const [characters, setCharacters] = useState([]);
    const [searchVal, setSearchVal]= useState("");
  
    const getCharacters =(featureUrl)=> {
      fetch(featureUrl)
        .then((res) => res.json())
        .then((data) => {
          setCharacters(data.results);
        });
  
    };
  
    useEffect(() => {
      getCharacters(featureUrl);
  
    }, []);

    const handleOnSubmit= (e) => {
        e.preventDefault();
        if(searchVal){
        fetch(searchUrl + searchVal)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setCharacters(data.results);
          });
          setSearchVal("");
        }
      };
    
      const handleOnChange= (e) => {
        setSearchVal(e.target.value);
      };
  
    return (
        <>
            <header>
              <form onSubmit={handleOnSubmit}>
            <input 
            className="search"
            type="search" 
            placeholder="Search..."
            value={searchVal}
            onChange={handleOnChange}/>
            </form>
          </header>
            <div className="character-container">
              {characters.length > 0 &&
                characters.map((character) =>
                  <Character key={character.id} {...character} />
                )}
            </div>
        </>);
}

export default CharacterList;