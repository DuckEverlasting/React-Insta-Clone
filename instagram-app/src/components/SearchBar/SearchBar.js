import React from "react";
import "./search.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="logo-box">
        <i className="fab fa-instagram" />
        <img className="instagram-logo" src="./img/Instagram_logo.png" alt="" />
      </div>
      <div className="input-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="icon-box">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
