import React from "react";

import "./FormInput.styles.scss";

const FormInput = ({ handleChange, label, ...otherPrpos }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherPrpos} />
      {label ? (
        <label
          className={`${
            otherPrpos.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
