import React, {useState} from 'react';
import CharacterView from '../view/CharacterView';
import { Redirect } from 'react-router-dom';

const Character = (props) => {
    const {
        characters,
        handleOnSubmit,
        searchVal,
        handleOnChange
    } = props;


    const [quizstarted, setQuizstarted] = useState(false);
    const [id, setId] = useState("0");

    function getCharacter() {
      console.log(characters);
      if(characters){
      return characters.length > 0 &&
      characters.map((character) => {
        return <CharacterView key={character.id} {...character} startquiz={startQuiz} />
                })
      }
      else return <h1>No match found...</h1>
    }


    function startQuiz(ids){
      setQuizstarted(true);
      setId(ids);
    }

    if(quizstarted) return (
      <Redirect to={"/quizitem/" + id}/>
    );
    else return (
      <>
        <header><h1>Choose Character</h1>
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
          {characters.length < 1 && <h1>Loading...</h1>}
          {getCharacter()}
        </div>
      </>)
      }
  export default Character;