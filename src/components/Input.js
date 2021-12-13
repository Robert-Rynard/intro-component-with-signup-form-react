import React, { useState } from "react";

import cn from "classnames";

const Input = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState(
    props.input.placeholder + " cannot be empty"
  );

  const validityHandler = (event) => {
    if (event.target.value) {
      setIsValid(true);
    } else {
      setErrorMessage(props.input.placeholder + " cannot be empty");
      setIsValid(false);
    }

    if (event.target.name === "email" && event.target.value) {
      if (/\S+@\S+\.\S+/.test(event.target.value)) {
        setIsValid(true);
      } else {
        setErrorMessage(" Looks like this is not an email");
        setIsValid(false);
      }
    }
  };

  return (
    <div
      className={cn({ "invalid-wrapper": !isValid })}
      data-error-message={errorMessage}
    >
      <input
        {...props.input}
        onChange={props.onChange}
        value={props.userData[props.input.name]}
        onBlur={validityHandler}
        required
      />
    </div>
  );
};

export default Input;
