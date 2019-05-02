import React from "react";
import PropTypes from "prop-types";
import "./search.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div className="logo-box">
        <i className="fab fa-instagram" />
        <img className="instagram-logo" src="./img/Instagram_logo.png" alt="" />
      </div>
      <div className="input-box">
        <form onSubmit={props.searchSubmit} action="">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={props.searchInput}
            onChange={props.searchChangeHandler}
          />
        </form>
        <i className="fas fa-search"></i>
      </div>
      <div className="icon-box">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" onClick={props.logOut}/>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchSubmit: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  searchChangeHandler: PropTypes.func.isRequired
};

export default SearchBar;
