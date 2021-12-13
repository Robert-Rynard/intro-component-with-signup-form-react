import React, { useState } from "react";

import Input from "./Input";

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
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });

  const inputHandler = ({ target: { value, name } }) => {
    setUserData((input) => ({ ...input, [name]: value }));
  };

  return (
    <div className="card">
      <form className="signup-form">
        {inputs.map((input) => (
          <Input
            key={input.id}
            input={input}
            onChange={inputHandler}
            userData={userData}
          />
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
