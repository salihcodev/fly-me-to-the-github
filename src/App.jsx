import React from "react";

// COMPONENTS:
import SudoBtn from "./components/sudo-btn/SudoBtn";

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
