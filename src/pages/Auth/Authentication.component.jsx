import React from "react";

import SignIn from "../../components/sign-in/SignIn.component";

import "./Authentication.styles.scss";

const AuthPage = () => {
  return (
    <div className="auth">
      <SignIn />
    </div>
  );
};

export default AuthPage;
