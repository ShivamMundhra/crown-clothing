import React from "react";

import SignIn from "../../components/sign-in/SignIn.component";
import SighUp from "../../components/sign-up/SignUp.component";

import "./Authentication.styles.scss";

const AuthPage = () => {
  return (
    <div className="auth">
      <SignIn />
      <SighUp />
    </div>
  );
};

export default AuthPage;
