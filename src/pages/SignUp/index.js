import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import logo from "~/assets/mask_gas.svg";
import { signUpRequest } from "~/store/modules/auth/actions";

const schema = Yup.object().shape({
  name: Yup.string().required("You must enter yout user name"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("You must enter your email"),
  password: Yup.string()
    .min(6, "You must enter at least 6 char password")
    .required("You must enter the password")
});

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password));
  };

  return (
    <>
      <img src={logo} alt="tattoo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Enter full name" />
        <Input name="email" type="email" placeholder="Enter email..." />
        <Input name="password" type="password" placeholder="Enter password" />
        <button type="submit">SignUp</button>
        <Link to="/">SignIn</Link>
      </Form>
    </>
  );
};

export default SignUp;
