import React from 'react';
import styled from 'styled-components';
import Card from '../card/Card';
import { Repos, Followers } from '../../components/Centralize';
import { AppStateContext } from '../../context/Context';

const User = () => {
  const { User } = React.useContext(AppStateContext);
  // check wether user obj is empty or not, with many ways:
  // [1]
  // const isUserEmpty = Object.keys(User).length === 0 && User.constructor === Object
  // [2]
  // const isUserEmpty = Object.entries(User).length === 0;
  // [3] this one is good for performance.
  const isUserEmpty = JSON.stringify(User) === '{}';

  return (
    !isUserEmpty && (
      <section className="user mt-40">
        <UserWrapper className="grid">
          <Card />
          <Repos />
          <Followers />
        </UserWrapper>
      </section>
    )
  );
};

export default User;

const UserWrapper = styled.main`
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 1rem;
`;
