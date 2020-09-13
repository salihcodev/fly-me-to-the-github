import React from "react";
import styled from "styled-components";
import Card from "../card/Card";
import { Repos, Followers } from "../../components/Centralize";

const User = () => {
  return (
    <section className="user mt-32">
      <UserWrapper className="grid">
        <Card />
        <Repos />
        <Followers />
      </UserWrapper>
    </section>
  );
};

export default User;

const UserWrapper = styled.main`
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 1rem;
`;
