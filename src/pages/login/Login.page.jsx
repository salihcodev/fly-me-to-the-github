import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../../images/login-img.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <h2>
      <button onClick={loginWithRedirect}>login / sign up</button>
    </h2>
  );
};

export default Login;
