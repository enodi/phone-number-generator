import React from "react";
import Title from "../Title";
import "./style.scss";

const Header = () => (
  <header className="header">
    <div className="header__content">
      <Title
        text="Random Phone Number Generator"
        className="header__title"
      />
    </div>
  </header>
);

export default Header;
