import React from "react";
import "./App.css";
import PostPage from "./components/PostContainer/PostPage";
import withAuthenticate from "./authentication/withAuthenticate";
import LoginSignUp from "./components/Login/LoginSignUp"

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginSignUp)

const App = () => {
  return (
    <div className="app">
      <ComponentFromWithAuthenticate />
      <footer>This is not Instagram</footer>
    </div>
  );
}
 
export default App;