import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { AppStateProvider } from "./context/Context";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";

// REACT_APP_AUTH_DOMAIN
// REACT_APP_AUTH_CLIENT_ID

const Domain = process.env.REACT_APP_AUTH_DOMAIN;
const ClientId = process.env.REACT_APP_AUTH_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={Domain}
      clientId={ClientId}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <AppStateProvider>
        <Router>
          <App />
        </Router>
      </AppStateProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
