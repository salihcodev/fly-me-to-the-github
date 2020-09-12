import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MainLoading } from "../../components/Centralize";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <MainLoading />;
  }
  if (error) {
    return <h2>OOOps.. {error.message}</h2>;
  }
  return <>{children}</>;
}

export default AuthWrapper;
