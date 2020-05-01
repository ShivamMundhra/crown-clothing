import React from "react";

import { ButtonContainer } from "./Button.styles";

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;

// import React from "react";

// import "./Button.styles.scss";

// const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
//   return (
//     <button
//       className={`${isGoogleSignIn ? "google-btn" : ""} ${
//         inverted ? "inverted" : ""
//       } custom-button`}
//       {...otherProps}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
