import React from 'react';
import { AppStateContext } from '../../context/Context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

// components:
import HeaderItem from './HeaderItem';
import SectionsFlag from '../sections flag/SectionsFlag';

const UserInfo = () => {
  // import necessary mocks data from context:
  const { User } = React.useContext(AppStateContext);
  const { public_repos, following, followers, public_gists, name } = User;

  // setup user information fo display;
  const UserHeaderData = [
    {
      icon: <GoRepo />,
      numberFlag: public_repos,
      subtitle: 'Repositories',
    },
    {
      icon: <FiUserPlus />,
      numberFlag: following,
      subtitle: 'Following',
    },
    {
      icon: <FiUsers />,
      numberFlag: followers,
      subtitle: 'Followers',
    },
    {
      icon: <GoGist />,
      numberFlag: public_gists,
      subtitle: 'Gists',
    },
  ];

  // check wether user obj is empty or not, with many ways:
  // [1]
  // const isUserEmpty = Object.keys(User).length === 0 && User.constructor === Object
  // [2]
  // const isUserEmpty = Object.entries(User).length === 0;
  // [3] this one is good for performance.
  const isUserEmpty = JSON.stringify(User) === '{}';

  return (
    !isUserEmpty && (
      <UserInfoWrapper className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 user-info-section relative border-gray-500 border border-solid rounded-md mb-20 py-4 px-1 rounded-tl-none mt-40">
        <SectionsFlag>{name && name.split(' ')[0]} Information</SectionsFlag>
        {UserHeaderData.map((item) => (
          <HeaderItem {...item} />
        ))}
      </UserInfoWrapper>
    )
  );
};

const UserInfoWrapper = styled.section``;

export default UserInfo;
