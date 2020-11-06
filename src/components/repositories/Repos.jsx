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
    <UserRepos className="repos-section relative p-6 mt-20 border border-solid border-gray-600 rounded-lg rounded-tl-none">
      <SectionsFlag>{name && name.split(' ')[0]} Repositories</SectionsFlag>
      <section className="firstChart">
        <h2 className="font-bold">Repos will be displayed here!!</h2>
      </section>
    </UserRepos>
  ) : (
    <UserReposNotFound className="flex items-center justify-center relative p-6 mt-20 border border-solid border-gray-600 rounded-lg rounded-tl-none">
      <SectionsFlag>{name && name.split(' ')[0]} Repositories</SectionsFlag>
      <h5 className="font-bold">
        @{login} has no repositories yet to display :I
      </h5>
    </UserReposNotFound>
  );
};

export default Repos;

const UserRepos = styled.section``;

const UserReposNotFound = styled.section`
  h5 {
    font-size: 0.9rem;
  }
`;
