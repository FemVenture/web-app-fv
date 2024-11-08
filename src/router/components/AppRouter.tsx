import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "../../public/pages/Home";

import { Login } from "../../auth/pages/LoginPage";
import { Register } from "../../auth/pages/RegisterPage";

export const AppRouter = (): ReactElement => {
  //const isLogged = useAuthentication((state) => state.isLoggedIn())
  const isLogged = true;

  return (
    <Routes>
      <Route
        element={<PrivateRoute canActivate={isLogged} defaultDestination="/" />}
      >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route
        element={
          <PrivateRoute canActivate={!isLogged} defaultDestination="/login" />
        }
      ></Route>
    </Routes>
  );
};
