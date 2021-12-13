import React, { useState } from "react";

import cn from "classnames";

const inputs = [
  {
    name: "fName",
    className: "signup-input",
    type: "text",
    id: 1,
    placeholder: "First Name",
  },
  {
    name: "lName",
    className: "signup-input",
    type: "text",
    id: 2,
    placeholder: "Last Name",
  },
  {
    name: "email",
    className: "signup-input signup-input--email",
    type: "email",
    id: 3,
    placeholder: "Email Address",
  },
  {
    name: "password",
    className: "signup-input",
    type: "password",
    id: 4,
    placeholder: "Password",
  },
];

const Form = () => {
  const [isValid, setIsValid] = useState(false);
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
    for (let i = 0; i < event.target.length - 1; i++) {
      const element = event.target[i];
      console.log(element);
    }
  };

  const inputHandler = ({ target: { value, name } }) => {
    setUserData((input) => ({ ...input, [name]: value }));
  };

  return (
    <div className="card">
      <form className="signup-form" onSubmit={submitHandler}>
        {inputs.map((input) => (
          <div
            className={cn({ "invalid-wrapper": !isValid })}
            data-input-name={input.placeholder}
            data-error-message=" cannot be empty"
          >
            <input
              key={input.id}
              {...input}
              onChange={inputHandler}
              value={userData[input.name]}
            />
          </div>
        ))}
        <button className="signup-form__btn" type="submit">
          Claim your free trial
        </button>
        <p className="signup-form__tos">
          By clicking the button, you are agreeing to our{" "}
          <a href="/">Terms and Services</a>
        </p>
      </form>
    </div>
  );
};

export default Form;
