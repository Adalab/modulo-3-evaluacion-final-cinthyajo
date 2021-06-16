import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png"
          alt="Rick and Morty"
        />
      </Link>
    </header>
  );
};

export default Header;
