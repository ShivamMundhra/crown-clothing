import React, { Component } from "react";

import FormInput from "../form-input/FormInput.component";
import Button from "../custom-button/Button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

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

    this.setState({ email: "", password: "" });
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
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
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign In With Google{" "}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;