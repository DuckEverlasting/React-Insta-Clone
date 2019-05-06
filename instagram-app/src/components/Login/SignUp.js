import React from "../../../node_modules/react";
import ls from "local-storage";
import "./login.css";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      newUsernameInput: "",
      newPasswordInput: "",
      fullNameInput: ""
    };
  }

  handleInputChanges = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  signUp = ev => {
    ev.preventDefault();
    let un = this.state.newUsernameInput;
    let pw = this.state.newPasswordInput;
    let fn = this.state.fullNameInput;
    if (un === "" || pw === "" || fn === "") {return}
    if (!ls(`user_${un}`)) {
      ls.set(`user_${un}`, { username: un, "full name": fn, password: pw });
      ls.set("current-user", ls.get(`user_${un}`));
      window.location.reload();
    }
    
  };

  render() {
    return (
      <div className={this.props.signUpClassHandler()}>
        <div className="login-box sign-up">
          <img src="./img/Instagram_logo.png" alt="" />
          <p className="sign-up-prompt">
            Sign up to see photos and videos from your friends.
          </p>
          <form action="">
            <input
              name="fullNameInput"
              className="nameField"
              type="text"
              placeholder="Full Name"
              value={this.state.fullNameInput}
              onChange={this.handleInputChanges}
            />
            <input
              name="newUsernameInput"
              className="usernameField"
              type="text"
              placeholder="Username"
              value={this.state.usernameInput}
              onChange={this.handleInputChanges}
            />
            <input
              name="newPasswordInput"
              className="passwordField"
              type="password"
              placeholder="Password"
              value={this.state.passwordInput}
              onChange={this.handleInputChanges}
            />
            <button onClick={this.signUp}>Sign Up</button>
          </form>
          <p className="terms">
            By signing up, you agree to our Terms, Data Policy, and Ownership of
            your Immortal Soul Policy.
          </p>
        </div>
        <div className="login-box sign-up">
          <p className="signUpText">
            Have an account? <span onClick={this.props.toLogin}>Log in</span>
          </p>
        </div>
      </div>
    );
  }
}

export default SignUp;
