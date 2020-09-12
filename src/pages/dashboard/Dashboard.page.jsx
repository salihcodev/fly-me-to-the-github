import React from "react";
import {
  Info,
  Header,
  User,
  Search,
  MainLoading,
} from "../../components/Centralize";

import { AppStateContext } from "../../context/Context";

const Dashboard = () => {
  const { Loading } = React.useContext(AppStateContext);

  if (Loading) {
    return (
      <>
        <Search />
        {/* loading */}
        <MainLoading />
      </>
    );
  } else {
    return (
      <>
        {/* navbar */}
        <Header />

        {/* search component */}
        <Search />

        {/* user essential info [repos, followers, following ...]  */}
        <Info />

        {/* about user component */}
        <User />
        {/* <Repos /> */}
      </>
    );
  }
};

export default Dashboard;
