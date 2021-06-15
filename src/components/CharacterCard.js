import React from "react";

//componente UserList usa el componente User que pinta el card con los datos dentro del <article>
const CharacterCard = (props) => {
  return (
    <li>
      <article className="card">
        <img
          className="card__img"
          src={props.image}
          alt={`Foto de ${props.name}`}
          title={`Foto de ${props.name}`}
        />
        <h4 className="card__title">{props.name}</h4>
        <p className="card__description">{props.species}</p>
      </article>
    </li>
  );
};

export default CharacterCard;
