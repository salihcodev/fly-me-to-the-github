import React from 'react';
import { AppStateContext } from '../../context/Context';
import styled from 'styled-components';

// component:
import SectionsFlag from '../sections flag/SectionsFlag';
import FollowerTemp from './FollowerTemp';

const Followers = () => {
  const { Followers, User } = React.useContext(AppStateContext);
  const { login, name } = User;

  // check wether user has repos or not:
  const isUserFollowersEmpty = Followers.length === 0;

  return !isUserFollowersEmpty ? (
    <FollowersWrapper className="followers-section followers-section relative p-6 mt-20 border border-solid border-gray-600 rounded-lg rounded-tl-none pr-0">
      <SectionsFlag>{name && name.split(' ')[0]} Followers </SectionsFlag>
      <div className="followers">
        {Followers.map((follower) => (
          <FollowerTemp {...follower} />
        ))}
      </div>
    </FollowersWrapper>
  ) : (
    <UserFollowersNotFound className="flex items-center justify-center relative p-6 mt-20 border border-solid border-gray-600 rounded-lg rounded-tl-none">
      <SectionsFlag>{name && name.split(' ')[0]} Followers</SectionsFlag>
      <h5 className="font-bold">@{login} has no followers yet to display :I</h5>
    </UserFollowersNotFound>
  );
};

const FollowersWrapper = styled.section`
  .followers {
    height: 33rem;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 5px !important;
    }

    ::-webkit-scrollbar-thumb {
      background: #718096;
      border: 22px none #ffffff;
      border-radius: 2px;
    }

    section.follower-temp:not(:last-child) {
      border-bottom: 1px solid #cbd5e0;
    }
  }
`;

const UserFollowersNotFound = styled.section`
  h5 {
    font-size: 0.9rem;
  }
`;

export default Followers;
