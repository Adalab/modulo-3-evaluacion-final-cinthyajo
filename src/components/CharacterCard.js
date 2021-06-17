import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import "../stylesheet/CharacterCard.scss";

const CharacterCard = (props) => {
  return (
    <li>
      <article className="card">
        <Link className="link" to={`/character/${props.id}`}>
          <img
            className="cardImg"
            src={props.image}
            alt={`Tarjeta de ${props.name}`}
            title={`Tarjeta de ${props.name}`}
          />
        </Link>
        <h4 className="cardTitle">{props.name}</h4>
        <p className="cardDescription">{props.species}</p>
      </article>
    </li>
  );
};

CharacterCard.propTypes = {};

export default CharacterCard;
