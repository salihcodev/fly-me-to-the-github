import React from "react";
import { Info, Repos, User, Search, Header } from "../../components/Centralize";
import loadingImage from "../../images/preloader.gif";
import { AppStateContext } from "../../context/Context";
const Dashboard = () => {
  // import necessary mocks data from context:
  // const { User, Repos, Followers } = React.useContext(AppStateContext);

  return (
    <>
      <Info />
      <User />
    </>
  );
};

export default Dashboard;
