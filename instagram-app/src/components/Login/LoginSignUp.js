import React from "react";
import "./login.css";
import Login from "./Login";
import SignUp from "./SignUp";

class LoginSignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      signUpPage: false
    };
  }

  loginClassHandler = () => {
    return this.state.signUpPage ? "login-page inactive" : "login-page";
  };

  signUpClassHandler = () => {
    return this.state.signUpPage ? "login-page sign-up" : "login-page sign-up inactive";
  };

  loginSignUpToggle = () => {
    this.setState({
      signUpPage: !this.state.signUpPage
    });
  };

  render() {
    return (
      <>
        <SignUp
          signUpClassHandler={this.signUpClassHandler}
          toLogin={this.loginSignUpToggle}
        />
        <Login
          loginClassHandler={this.loginClassHandler}
          toSignUp={this.loginSignUpToggle}
        />
      </>
    );
  }
}

export default LoginSignUp;
