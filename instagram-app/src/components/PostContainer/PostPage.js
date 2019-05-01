import React from "react";
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
      currentUser: "DuckEverlasting",
      searchInput: ""
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
      filteredData: dummyData
    });
  }

  searchChangeHandler = ev => {
    this.setState({
      searchInput: ev.target.value
    });
  };

  filterData = (el) => {
    if (this.state.searchInput === "") {return true}
    return (el.username === this.state.searchInput)
  }

  searchSubmit = ev => {
    ev.preventDefault();
    this.setState({
      filteredData: this.state.data.filter(this.filterData),
      searchInput: ""
    })
  };

  emptyHandler = () => {
    if (this.state.filteredData.length === 0) {
      return ("sorry empty")
    } else {
      return ("sorry")
    }
  }

  render() {
    return (
      <>
        <SearchBar
          searchInput={this.state.searchInput}
          searchSubmit={this.searchSubmit}
          searchChangeHandler={this.searchChangeHandler}
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
