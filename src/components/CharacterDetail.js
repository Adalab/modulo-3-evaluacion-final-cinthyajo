import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../stylesheet/CharacterDetail.scss";

const CharacterDetail = (props) => {
  const showStatus = () => {
    if (props.foundCharacter.status === "Dead") {
      return "💀";
    }
  };
  return (
    <div>
      <Link className="backLink" to="/">
        {" "}
        Go back
      </Link>
      <header>
        <h2 className="headerDetail">{props.foundCharacter.name}</h2>
      </header>
      <section>
        <img
          className="imgDetail"
          src={props.foundCharacter.image}
          alt={props.foundCharacter.name}
        />
        <span>{showStatus()}</span>
        <ul className="listContainer">
          <li>Species: {props.foundCharacter.species}</li>
          <li>Origin: {props.foundCharacter.origin.name}</li>
          <li>Episodes: {props.foundCharacter.episodes.length}</li>
          <li>Status: {props.foundCharacter.status}</li>
        </ul>
      </section>
    </div>
  );
};

CharacterDetail.propTypes = {
  foundCharacter: PropTypes.object.isRequired,
};
export default CharacterDetail;
