import React from "../../../node_modules/react";
import PropTypes from "../../../node_modules/prop-types";
import styled from "styled-components"

const SCHeader = styled.header`
  background: white;
  position: fixed;
  left: 0;
  width: 96%;
  height: 40px;
  padding: 18px 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(153, 153, 153);
  z-index: 3;
`
const SCLogoBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 30%;
`
const SCInputBox = styled.div`
  position: relative;
  width: 20%;
`
const SCInstagramIcon = styled.i`
  font-size: 1.8rem;
  padding-right: 10px;
  margin-right: 5px;
  border-right: 2px solid black;
`
const SCInstagramLogo = styled.img`
height: 100%;
`
const SCSearchInput = styled.input`
  width: 100%;
  text-align: left;
  padding: 5px 20px;
`
const SCSearchIcon = styled.i`
  position: absolute;
  color: grey;
  left: 5px;
  top: 9px;
  font-size: .8rem;
`
const SCIconBox = styled.div`
  width: 30%;
  text-align: end;
  margin-top: 3px;
`
const SCIcon = styled.i`
  color: rgb(54, 54, 54);
  font-size: 1.4rem;
  padding-left: 20px;
`
const SCLogOutIcon = styled(SCIcon)`
  cursor: pointer;
`
const SCLogOutText = styled.span`
  position: absolute;
  right: 1.55%;
  bottom: 10%;
  font-size: .6rem;
  user-select: none;
`

const SearchBar = (props) => {
  return (
    <SCHeader>
      <SCLogoBox>
        <SCInstagramIcon className="fab fa-instagram" />
        <SCInstagramLogo src="./img/Instagram_logo.png" alt="" />
      </SCLogoBox>
      <SCInputBox>
        <form onSubmit={props.searchSubmit} action="">
          <SCSearchInput
            type="text"
            placeholder="Search"
            value={props.searchInput}
            onChange={props.searchChangeHandler}
          />
        </form>
        <SCSearchIcon className="fas fa-search"></SCSearchIcon>
      </SCInputBox>
      <SCIconBox>
        <SCIcon className="far fa-compass" />
        <SCIcon className="far fa-heart" />
        <SCLogOutText>Log Out</SCLogOutText>
        <SCLogOutIcon className="far fa-user" onClick={props.logOut}/>
      </SCIconBox>
    </SCHeader>
  );
};

SearchBar.propTypes = {
  searchSubmit: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  searchChangeHandler: PropTypes.func.isRequired
};

export default SearchBar;
