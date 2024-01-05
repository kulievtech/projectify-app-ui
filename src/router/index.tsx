import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import {
    AdminForgotPassword,
    AdminLogin,
    AdminResetPassword,
    AdminSignUp,
    TeamMemberCreatePassword,
    TeamMemberLogin
} from "../pages";
import { App } from "../App";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}></Route>
            <Route path="/admin/sign-up" element={<AdminSignUp />}></Route>
            <Route path="/admin/login" element={<AdminLogin />}></Route>
            <Route
                path="/admin/forgot-password"
                element={<AdminForgotPassword />}
            ></Route>
            <Route
                path="/admin/reset-password"
                element={<AdminResetPassword />}
            ></Route>
            <Route
                path="/team-member/create-password"
                element={<TeamMemberCreatePassword />}
            ></Route>
            <Route
                path="/team-member/login"
                element={<TeamMemberLogin />}
            ></Route>
        </>
    )
);
