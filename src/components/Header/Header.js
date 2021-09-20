import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/home">HOME</a>
        <a href="/country">COUNTRY</a>
        <a href="/about">ABOUT US</a>
      </nav>
    </div>
  );
};

export default Header;
