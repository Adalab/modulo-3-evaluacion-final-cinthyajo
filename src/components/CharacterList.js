import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return (
      <CharacterCard
        name={character.name}
        species={character.species}
        image={character.image}
        id={character.id}
      />
    );
  });

  return (
    <section className="cards">
      <ul>{characterElements}</ul>
    </section>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.string.isRequired,
};
export default CharacterList;
