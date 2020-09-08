import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { AppStateProvider } from "./context/Context";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="codev.us.auth0.com"
      clientId="MkTsyH9OHfb1x961idPxgo9fseqoodMs"
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
