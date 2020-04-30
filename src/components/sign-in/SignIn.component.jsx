import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/FormInput.component";
import Button from "../custom-button/Button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./SignIn.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            label="EMAIL"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="PASSWORD"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className="buttons">
            <Button type="submit" value="Submit Form">
              Sign In
            </Button>
            <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
              {" "}
              Sign In With Google{" "}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDisatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDisatchToProps)(SignIn);
