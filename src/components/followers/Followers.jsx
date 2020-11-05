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
    <FollowersWrapper className="followers-section relative followers-section user-section border-gray-500 border border-solid rounded-md p-4 pr-0 rounded-tl-none">
      <SectionsFlag>{name && name.split(' ')[0]} Followers </SectionsFlag>
      <div className="followers">
        {Followers.map((follower) => (
          <FollowerTemp {...follower} />
        ))}
      </div>
    </FollowersWrapper>
  ) : (
    <UserFollowersNotFound className="border-gray-500 border border-solid rounded-lg p-6">
      <h5 className="font-bold">@{login} has no followers yet to display :I</h5>
    </UserFollowersNotFound>
  );
};

const FollowersWrapper = styled.section`
  .followers {
    height: 33rem;
    overflow-y: scroll;

    section.follower-temp:not(:last-child) {
      border-bottom: 1px solid #cbd5e0;
    }
  }
`;

const UserFollowersNotFound = styled.section`
  border: none;
  padding: 0;
  h5 {
    font-size: 0.9rem;
  }
`;

export default Followers;
