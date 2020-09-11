import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import LoginAside from "../../assets/login-aside.svg";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <LoginPageWrapper className="flex items-center">
      <aside style={{ backgroundImage: ` url(${LoginAside})` }}></aside>
      <div className="login-container flex justify-center">
        <button
          onClick={loginWithRedirect}
          title="login / signup"
          className="border-2 border-gray-700 bg-orange-200 py-4 px-6 flex justify-center font-bold"
        >
          <span className="text">Fly on github</span>
          <span className="icon pl-4 pt-1">{FaLongArrowAltRight()} </span>
        </button>
      </div>
    </LoginPageWrapper>
  );
};

export default Login;

const LoginPageWrapper = styled.main`
  aside {
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 40rem;
  }

  .login-container {
    width: 50%;
  }
`;
