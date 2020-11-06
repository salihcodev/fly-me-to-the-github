import React from 'react';
import {
  Info,
  Header,
  Footer,
  User,
  Search,
  MainLoading,
} from '../../components/Centralize';
import styled from 'styled-components';

import { AppStateContext } from '../../context/Context';
document.title = `Dashboard | Fly me to the github`;

const Dashboard = () => {
  const { Loading } = React.useContext(AppStateContext);

  return Loading ? (
    // true
    <>
      {/* header */}
      <Header />
      <DashboardWrapper className="grid container mx-auto px-4">
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
      <DashboardWrapper className="container mx-auto px-4">
        <Search />

        {/* user essential info [repos, followers, following ...]  */}
        <Info />

        {/* about user component */}
        <User />
      </DashboardWrapper>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Dashboard;

const DashboardWrapper = styled.main``;
