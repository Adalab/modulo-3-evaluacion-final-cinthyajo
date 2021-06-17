import React from "react";
import CharacterCard from "./CharacterCard";

//es un map de pintar datos, recibe por props el listado de personajes (props.users.map), los mapea y los pinta (return)
//Almaceno el return del map en la constante userElements y luego pinto esa constante en el <ul> {userElements}
const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    //está retornando una parte del html que es el componente CharacterCard
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

export default CharacterList;
