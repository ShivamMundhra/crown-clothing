import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import HomePage from "./pages/homepage/Homepage.component";
// import ShopPage from "./pages/shop/Shop.component";
// import AuthPage from "./pages/Auth/Authentication.component";
// import CheckoutPage from "./pages/checkout/CheckoutPage.component";

import Header from "./components/header/Header.component";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary.component";
import Spinner from "./components/spinner/Spinner.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalStyle } from "./Global.styles";

// import { auth, createUserProfile } from "./firebase/firebase.utils";

const HomePage = lazy(() => import("./pages/homepage/Homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/Shop.component"));
const AuthPage = lazy(() => import("./pages/Auth/Authentication.component"));
const CheckoutPage = lazy(() =>
  import("./pages/checkout/CheckoutPage.component")
);

const App = ({ checkUserSession, currentUser }) => {
  // componentDidMount() {
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
  // }

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/shop" /> : <AuthPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
