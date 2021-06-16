import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const showStatus = () => {
    if (props.foundCharacter.status === "Dead") {
      return "💀";
    }
  };
  return (
    <div>
      <Link to="/"> volver</Link>
      <header>
        <h2>{props.foundCharacter.name}</h2>
      </header>
      <section>
        <img src={props.foundCharacter.image} alt={props.foundCharacter.name} />
        <span>{showStatus}</span>
        <ul>
          <li>Species: {props.foundCharacter.species}</li>
          <li>Origin: {props.foundCharacter.origin.name}</li>
          <li>Episodes: {props.foundCharacter.episode}</li>
          <li>Status: {props.foundCharacter.status}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
