import React, { Component } from "react";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./ErrorBoundary.styles";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorOccured: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { errorOccured: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.errorOccured) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/g3hgqe8.png" />
          <ErrorImageText>Page is broken. Please Check the URL</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
