import React from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

// API source:
const rootUrl = "https://api.github.com";

// context context-aria:
const AppStateContext = React.createContext();

// context provider:
const AppStateProvider = ({ children }) => {
  const [User, setUser] = React.useState(mockUser);
  const [Repos, setRepos] = React.useState(mockRepos);
  const [Followers, setFollowers] = React.useState(mockFollowers);
  const [Requisites, setRequisites] = React.useState(0);
  const [Loading, setLoading] = React.useState(false);
  const [Error, setError] = React.useState({ show: false, msg: " " });

  // check wether the IP address has requisites or not.
  const CheckReq = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;

        if (remaining !== 0) {
          setRequisites(remaining);
        } else {
          toggleError(true, "error");
        }
      })
      .catch((err) => console.log(err));
  };

  // search about specific user:
  const SearchGithubUser = async (user) => {
    // throw error: invoke the function here to set the Error to default every search.
    toggleError();

    // start loading:
    setLoading(true);

    // get the user:
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );

    // add the <user> param to <setUser>
    if (response) {
      setUser(response.data);
      // fill the follower and repos:
      const { login, followers_url, repos_url } = response.data;
      console.log(login, followers_url, repos_url);

      // followers:
      axios(`${followers_url}?per_page=100`).then((res) =>
        setFollowers(res.data)
      );

      // repos:
      axios(`${repos_url}?per_page=100`).then((res) => setRepos(res.data));
    } else {
      toggleError(true, `there is no user matches your search query  ${user}`);
    }

    // end loading:
    setLoading(false);
    CheckReq();
  };

  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };
  React.useEffect(CheckReq, []);

  return (
    <AppStateContext.Provider
      value={{
        User,
        Repos,
        Followers,
        Requisites,
        Error,
        SearchGithubUser,
        Loading,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateProvider, AppStateContext };
