import React from "react";
import { Link } from "react-router-dom";

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
