/*import React, { useState, useEffect } from 'react';
import Character from './Character';


const CharacterList = () => {

  //const API_KEY = '1741527979362433';
  const featureUrl = 'https://www.superheroapi.com/api.php/1741527979362433/search/a';
  const searchUrl = 'https://www.superheroapi.com/api.php/1741527979362433/search/';

  const [characters, setCharacters] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const getCharacters = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });

  };
  useEffect(() => {
    getCharacters(featureUrl);
    //getCharacters(searchVal);
  }, [searchVal]);




  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchVal) {
      getCharacters(searchUrl + searchVal);

      setSearchVal("");
    }
  };

  const handleOnChange = (e) => {
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
            onChange={handleOnChange} />
        </form>
      </header>
      <div className="character-container">
        {characters.length > 0 &&
          characters.map((character) =>
            <Character key={character.id} {...character} />
          )}
      </div>
    </>);

};

export default CharacterList;*/
import React, { useState, useEffect } from 'react';
import SuperheroSource from './SuperheroSource';
import Character from '../presenters/Character';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    SuperheroSource.getSuperheroByName("a").then(data => setCharacters(data.results));
    //getCharacters(searchVal);
  }, []);


  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchVal) {
      SuperheroSource.getSuperheroByName(searchVal).then(data => setCharacters(data.results));

      setSearchVal("");
    }
  };

  const handleOnChange = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <>
      <Character
        characters={characters}
        setCharacters={setCharacters}
        handleOnSubmit={handleOnSubmit}
        searchVal={searchVal}
        handleOnChange={handleOnChange}
      />
    </>);

};

export default CharacterList;