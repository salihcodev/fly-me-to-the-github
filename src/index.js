import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { AppStateProvider } from "./context/Context";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <Router>
        <App />
      </Router>
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
