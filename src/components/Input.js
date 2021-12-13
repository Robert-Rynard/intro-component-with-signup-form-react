import React, { useState } from "react";

import cn from "classnames";

const Input = (props, { input }) => {
  const [isValid, setIsValid] = useState(false);

  return (
    <div
      className={cn({ "invalid-wrapper": !isValid })}
      data-input-name={input.placeholder}
      data-error-message=" cannot be empty"
    >
      <input
        key={input.id}
        {...input}
        onChange={props.inputHandler}
        value={props.userData[input.name]}
      />
    </div>
  );
};

export default Input;
