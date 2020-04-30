import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/Shop.component";
import AuthPage from "./pages/Auth/Authentication.component";
import CheckoutPage from "./pages/checkout/CheckoutPage.component";

import Header from "./components/header/Header.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

// import { auth, createUserProfile } from "./firebase/firebase.utils";

import "./App.css";

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser } = this.props;
    //   this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //     if (userAuth) {
    //       const userRef = await createUserProfile(userAuth);
    //       userRef.onSnapshot((snapshot) => {
    //         setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data(),
    //         });
    //       });
    //     } else setCurrentUser(userAuth);
    //   });

    const { checkUserSession } = this.props;

    checkUserSession();
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route path="/" component={Header} /> */}
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/shop" /> : <AuthPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
