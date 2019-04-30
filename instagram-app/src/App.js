import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from "./dummy-data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentUser: "DuckEverlasting"
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    });
  }

  render() {
    console.log("APP STATE", this.state)
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
          data={this.state.data}
          currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
