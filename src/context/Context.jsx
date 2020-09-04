import React, { useState, useEffect } from "react";
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
  return (
    <AppStateContext.Provider
      value={{
        User,
        Repos,
        Followers,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateProvider, AppStateContext };
