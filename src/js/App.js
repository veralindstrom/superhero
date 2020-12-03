
import React, { useState, useEffect } from 'react';
import LoginModel from './LoginModel';
import '../css/App.css';
import Character from './Character';

const API_KEY = '1741527979362433';

//const featureUrl = 'https://cors-anywhere.herokuapp.com/superheroapi.com/api/1741527979362433/70';
const searchUrl = 'https://www.superheroapi.com/api.php/1741527979362433/search/superman';
//const imageUrl = 'https://superheroapi.com/api/1741527979362433/70/image';



function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacters(data.results);
      });

  }, []);
  return (
    <div className="movie-container">
      {characters.length > 0 &&
        characters.map((character) =>
          <Character key={character.id} {...character} />
        )}
      <LoginModel />
    </div>
  );
}

export default App;