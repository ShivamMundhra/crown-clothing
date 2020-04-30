import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/FormInput.component";
import Button from "../custom-button/Button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./SignIn.styles.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCred;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCred({ ...userCred, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="EMAIL"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="PASSWORD"
          value={password}
          onChange={handleChange}
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
};

const mapDisatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDisatchToProps)(SignIn);
