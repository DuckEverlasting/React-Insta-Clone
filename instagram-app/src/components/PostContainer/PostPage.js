import React from "react";
import ls from "local-storage";
import "./post.css";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "../../dummy-data";

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      currentUser: "",
      searchInput: ""
    };
  }

  componentDidMount() {
    let user;
    ls("current-user")
      ? (user = ls.get("current-user").username)
      : (user = "SOMETHING IS WRONG");
    this.setState({
      data: dummyData,
      filteredData: dummyData,
      currentUser: user
    });
  }

  searchChangeHandler = ev => {
    this.setState({
      searchInput: ev.target.value
    });
  };

  filterData = el => {
    if (this.state.searchInput === "") {
      return true;
    }
    return el.username === this.state.searchInput;
  };

  searchSubmit = ev => {
    ev.preventDefault();
    const newFilteredData = this.state.data.filter(this.filterData);
    console.log(newFilteredData);
    this.setState({
      filteredData: newFilteredData,
      searchInput: ""
    });
  };

  emptyHandler = () => {
    if (this.state.filteredData.length === 0) {
      return "sorry empty";
    } else {
      return "sorry";
    }
  };

  logOut = () => {
    ls.remove("current-user");
    window.location.reload();
  }

  render() {
    return (
      <>
        <SearchBar
          className="post-page"
          searchInput={this.state.searchInput}
          searchSubmit={this.searchSubmit}
          searchChangeHandler={this.searchChangeHandler}
          logOut={this.logOut}
        />
        <PostContainer
          data={this.state.filteredData}
          currentUser={this.state.currentUser}
          emptyHandler={this.emptyHandler}
        />
      </>
    );
  }
}

export default PostPage;
