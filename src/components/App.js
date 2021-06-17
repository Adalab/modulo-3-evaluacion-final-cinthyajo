import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../images/logo.png";
import CharacterDetail from "./CharacterDetail";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import getApiData from "../services/api";
import Header from "./Header";
import "../stylesheet/App.scss";
import ls from "../services/local-storage";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  //Call API with useEffect hook
  useEffect(() => {
    //si la lista de personajes está vacía, llama al API que me hace el Fetch. comparo la longitud de la lista de personajes con 0 es averiguar si está vacía.
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  //Me guarda los personajes
  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  //Function: filter characters
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  });

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  //Function: looking for characters
  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);

    const foundCharacter = characters.find((character) => {
      return character.id === routeCharacterId;
    });

    if (foundCharacter !== undefined) {
      return <CharacterDetail foundCharacter={foundCharacter} />;
    } else {
      return <p>Character not found</p>;
    }
  };

  return (
    <div>
      <Header logo={logo} />
      <div className="divContainer">
        <Switch>
          <Route exact path="/">
            <Filters filterName={filterName} handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
          </Route>
          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          />
        </Switch>
      </div>
    </div>
  );
};

//Defining propTypes
App.propTypes = {};
export default App;
