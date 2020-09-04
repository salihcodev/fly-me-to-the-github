import React from "react";

// COMPONENTS:
import SudoBtn from "./components/sudo-btn/SudoBtn";

// PAGES:
import {
  Dashboard,
  Login,
  PrivateRoute,
  AuthWrapper,
  Error,
} from "./pages/Centralize";
// ROUTER SYSTEM:
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Dashboard />
      {/* <SudoBtn bkgColor={"#125a96"} Color={"#f1f1f1"}>
        Hello world
      </SudoBtn> */}
    </div>
  );
}

export default App;
