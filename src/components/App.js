import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import getApiData from "../services/api";
import ls from "../services/local-storage";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));

  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  const filteredCharacters = characters;

  return (
    <>
      <img src={logo} alt="Rick and Morty" />
      <div>
        <CharacterList characters={filteredCharacters} />
      </div>
    </>
  );
};

export default App;
