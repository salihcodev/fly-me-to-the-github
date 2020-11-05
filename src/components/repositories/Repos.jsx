import React from 'react';
import styled from 'styled-components';
import { AppStateContext } from '../../context/Context';
import SectionsFlag from '../sections flag/SectionsFlag';

import {
  ExampleChart,
  Pie3D,
  Column3D,
  Bar3D,
  Doughnut2D,
} from '../charts/Centralize';

const Repos = () => {
  const { Repos, User } = React.useContext(AppStateContext);
  const { login, name } = User;

  // check wether user has repos or not:
  const isUserReposEmpty = Repos.length === 0;

  return !isUserReposEmpty ? (
    <UserRepos className="repos-section relative border-gray-500 border border-solid rounded-lg p-6 rounded-tl-none">
      <SectionsFlag>{name && name.split(' ')[0]} Repositories</SectionsFlag>
      <section className="firstChart">
        <h2 className="font-bold">Repos will be displayed here!!</h2>
      </section>
    </UserRepos>
  ) : (
    <UserReposNotFound className="border-gray-500 border border-solid rounded-lg p-6">
      <h5 className="font-bold">
        @{login} has no repositories yet to display :I
      </h5>
    </UserReposNotFound>
  );
};

export default Repos;

const UserRepos = styled.section`
  border-color: #dedede;
`;

const UserReposNotFound = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  h5 {
    font-size: 0.9rem;
  }
`;
