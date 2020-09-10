import React from "react";
import { Info, Repos, User, Search } from "../../components/Centralize";
import loadingImage from "../../images/preloader.gif";

import styled from "styled-components";

import { AppStateContext } from "../../context/Context";

const Dashboard = () => {
  const { Loading } = React.useContext(AppStateContext);

  if (Loading) {
    return (
      <>
        <Search />
        <section>
          <img
            src={loadingImage}
            alt="LOADING"
            style={{ width: "150px", height: "150px", display: "block" }}
          />
        </section>
      </>
    );
  } else {
    return (
      <>
        <Search />
        <Info />
        <User />
        {/* <Repos /> */}
      </>
    );
  }
};

export default Dashboard;
