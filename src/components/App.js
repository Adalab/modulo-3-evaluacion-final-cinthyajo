import React, { useState, useEffect } from "react";
//import { Route, Switch } from "react-router-dom";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import getApiData from "../services/api";
import ls from "../services/local-storage";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

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

  //estudiarla bien, base para sacar el punto 2
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  return (
    <>
      <img src={logo} alt="Rick and Morty" />
      <div>
        <Filters filterName={filterName} handleFilter={handleFilter} />

        <CharacterList characters={filteredCharacters} />
      </div>
    </>
  );
};

export default App;
