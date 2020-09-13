import React from "react";
import { AppStateContext } from "../../context/Context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

// components:
import HeaderItem from "./HeaderItem";

const UserInfo = () => {
  // import necessary mocks data from context:
  const { User } = React.useContext(AppStateContext);
  const { public_repos, following, followers, public_gists } = User;

  // setup user information fo display;
  const UserHeaderData = [
    {
      icon: <GoRepo />,
      numberFlag: public_repos,
      subtitle: "Repositories",
    },
    {
      icon: <FiUserPlus />,
      numberFlag: following,
      subtitle: "Following",
    },
    {
      icon: <FiUsers />,
      numberFlag: followers,
      subtitle: "Followers",
    },
    {
      icon: <GoGist />,
      numberFlag: public_gists,
      subtitle: "Gists",
    },
  ];

  return (
    <UserInfoWrapper className="border-gray-500 border border-solid rounded-md mb-8 py-4 px-6">
      {UserHeaderData.map((item) => (
        <HeaderItem {...item} />
      ))}
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default UserInfo;
