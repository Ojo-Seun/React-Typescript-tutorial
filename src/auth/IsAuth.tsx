import React from "react";
import LoginPage from "./LoginPage";

type authPropsTypes = {
  isAuth: boolean;
  children: React.ReactNode;
};

function IsAuth({ isAuth, children }: authPropsTypes) {
  return <div>{isAuth ? children : <LoginPage />}</div>;
}

export default IsAuth;
