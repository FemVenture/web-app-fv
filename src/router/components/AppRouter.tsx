import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "../../public/pages/Home";

import { Login } from "../../auth/pages/LoginPage";
import { Register } from "../../auth/pages/RegisterPage";
import { ProfielPage } from "../../profile/page/ProfilePage";
import { ProjectPage } from "../../project/pages/ProjectPage";



export const AppRouter = (): ReactElement => {
    //const isLogged = useAuthentication((state) => state.isLoggedIn())
    const isLogged = true;

    return (
        <Routes>
            <Route element={
                <PrivateRoute canActivate={isLogged} defaultDestination="/login" />
            }
            >
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectPage/>}/>
                <Route path="/profile" element={<ProfielPage/>}/>
            </Route>
            <Route element={
                <PrivateRoute canActivate={!isLogged} defaultDestination="/login" />
            }
            >
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
}