import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "../../public/pages/Home";

import { Login } from "../../auth/pages/LoginPage";
import { Register } from "../../auth/pages/RegisterPage";
import { ProfilePage } from "../../profile/page/ProfilePage";
import { ProjectPage } from "../../project/pages/ProjectPage";
import { Explore } from "../../public/pages/Explore";

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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projects/:projectId/:entrepreneurId" element={<ProjectPage/>}/>
        <Route path="/explore" element={<Explore />} />
      </Route>
      <Route
        element={
          <PrivateRoute canActivate={!isLogged} defaultDestination="/login" />
        }
      ></Route>
    </Routes>
  );
};
