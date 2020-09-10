import React from "react";

// COMPONENTS:
import SudoBtn from "./components/sudo-btn/SudoBtn";
import { Header } from "./components/Centralize";

// PAGES:
import {
  Dashboard,
  Login,
  PrivateRoute,
  AuthWrapper,
  NotFound,
} from "./pages/Centralize";
// ROUTER SYSTEM:
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Header />
      <Switch>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </AuthWrapper>
  );
}

export default App;

{
  /* <SudoBtn bkgColor={"#125a96"} Color={"#f1f1f1"}>
  Hello world
</SudoBtn> */
}
