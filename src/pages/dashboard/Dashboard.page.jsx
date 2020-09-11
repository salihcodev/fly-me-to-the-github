import React from "react";
import { Info, Header, User, Search } from "../../components/Centralize";
import loadingImage from "../../images/preloader.gif";

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
