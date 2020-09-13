import React from "react";
import {
  Info,
  Header,
  User,
  Search,
  MainLoading,
} from "../../components/Centralize";
import styled from "styled-components";

import { AppStateContext } from "../../context/Context";

const Dashboard = () => {
  const { Loading } = React.useContext(AppStateContext);

  return Loading ? (
    // true
    <>
      {/* header */}
      <Header />
      <DashboardWrapper className="grid">
        {/* find search query */}
        <Search />

        {/* It's LOOOOOOADER */}
        <MainLoading />
      </DashboardWrapper>
    </>
  ) : (
    // false
    <>
      <Header />
      <DashboardWrapper>
        <Search />

        {/* user essential info [repos, followers, following ...]  */}
        <Info />

        {/* about user component */}
        <User />
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;

const DashboardWrapper = styled.main`
  padding: 2rem 6rem;

  .grid-cont {
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
`;
