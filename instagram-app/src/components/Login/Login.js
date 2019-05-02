import React from "react";
import ls from "local-storage";
import "./login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: "",
    };
  }

  handleInputChanges = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  login = (ev) => {
    ev.preventDefault();
    let un = this.state.usernameInput;
    let pw = this.state.passwordInput;
    if (un === "" || pw === "") {return}
    if (ls(`user_${un}`) && ls.get(`user_${un}`).password === pw) {
      ls.set("current-user", ls.get(`user_${un}`));
      window.location.reload();
    }
  }

  render() {
    return (
      <div className={this.props.loginClassHandler()}>
        <div className="login-box">
          <img src="./img/Instagram_logo.png" alt="" />
          <form action="">
            <input
              name="usernameInput"
              className="usernameField"
              type="text"
              placeholder="Username"
              value={this.state.usernameInput}
              onChange={this.handleInputChanges}
            />
            <input
              name="passwordInput"
              className="passwordField"
              type="password"
              placeholder="Password"
              value={this.state.passwordInput}
              onChange={this.handleInputChanges}
            />
            <button onClick={this.login}>Log In</button>
          </form>
          <p className="forgot-password" href="#">
            Forgot password?
          </p>
        </div>
        <div className="login-box">
          <p className="signUpText">
            Don't have an account? <span onClick={this.props.toSignUp}>Sign up</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
