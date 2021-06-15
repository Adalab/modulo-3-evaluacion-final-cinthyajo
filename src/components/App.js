import React, { useState, useEffect } from "react";
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
      <h1 className="title--big">Rick and Morty</h1>
      <div className="col2">
        <CharacterList characters={filteredCharacters} />
      </div>
    </>
  );
};

export default App;
