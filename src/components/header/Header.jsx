import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    isLoading,
    logout,
    user,
  } = useAuth0();
  

  const isUser = isAuthenticated && user;

  console.log({ isAuthenticated, loginWithRedirect, isLoading, logout, user });

  return (
    <header>
      {/* USER BLOCK */}
      <div className="user">
        {isUser && user.picture && (
          <img
            style={{ width: "35px" }}
            src={user.picture}
            className="user img"
            alt={user.name}
          />
        )}

        {isUser && user.name && (
          <h4 className="username">
            <strong>{user.name.toUpperCase()}</strong>
          </h4>
        )}
      </div>

      {/* MANAGE LOGIN AND OUT PROCESS */}
      <div className="log-in-out">
        {isUser ? (
          <button
            className="logout"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            logout
          </button>
        ) : (
          <button className="login" onClick={loginWithRedirect}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

const Wrapper = styled.nav`
  /* padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  } */
`;

export default Header;
