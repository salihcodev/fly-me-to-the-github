import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AppLogo from "../../assets/app-logo.svg";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  const { isAuthenticated, logout, user } = useAuth0();

  // select user info section:
  const userInfo = React.useRef();

  // check login-out:
  const isUser = isAuthenticated && user;

  return (
    <HeaderWrapper className="flex pt-2 pb-10 px-4 mb-20 h-20  items-baseline">
      <div className="logo-container flex-grow flex-row-reverse">
        <Link to="/">
          <img src={AppLogo} alt="fly-me-to-the-github logo" className="h-16" />
        </Link>
      </div>

      {/* USER BLOCK */}
      <div className="user-container h-20 py-4 px-2 mb-20 flex-grow flex justify-end">
        {/* user image */}
        <div className="user-img relative cursor-pointer">
          {isUser && user.picture && (
            <img
              src={user.picture}
              alt={user.name}
              className="h-12 rounded-full 
              border-solid border-4
              border-gray-400"
              onClick={() => userInfo.current.classList.toggle("toggler")}
            />
          )}

          {/* user info */}
          <div
            className="user-info w-48 p-2 absolute  border-solid border border-gray-400 rounded-md "
            ref={userInfo}
          >
            {""}
            {isUser && user.name && (
              <h4 className="">
                <strong>{user.name.toUpperCase()}</strong>
              </h4>
            )}

            {/* login-out */}
            <div className="log-in-out">
              <button
                className="logout border-t border-gray-400 mt-4 p-1  w-full flex cursor-pointer"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                <span className="icon p-1">{AiOutlineLogout()}</span>
                <span className="text">logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  .user-container {
    .user-img {
      .user-info {
        top: 65px;
        left: -148px;
        display: none;

        &::before {
          content: "";
          display: block;
          width: 13px;
          height: 13px;
          background: #fff;
          position: absolute;
          top: -8px;
          right: 13px;
          border-left: 1px solid #cbd5e0;
          border-top: 1px solid #cbd5e0;
          transform: rotate(45deg);
        }
      }

      /* toggle user info card */
      .toggler {
        display: block;
      }
    }
  }
`;
