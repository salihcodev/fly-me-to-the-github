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
    <Wrapper>
      {UserHeaderData.map((item) => (
        <HeaderItem {...item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`;

export default UserInfo;
