import { App } from "../App";
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
    AdminPlatform,
    AdminProjects,
    TeamMemberCreatePassword,
    TeamMemberLogin,
    TeamMemberPlatform,
    TeamMemberResetPassword,
    TeamMemberForgotPassword
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />} />
            <Route path="admin/sign-up" element={<AdminSignUp />} />
            <Route path="admin/login" element={<AdminLogin />} />
            <Route
                path="admin/forgot-password"
                element={<AdminForgotPassword />}
            />
            <Route
                path="admin/reset-password"
                element={<AdminResetPassword />}
            />

            <Route
                path="admin/platform"
                element={
                    <ProtectedRoute
                        component={<AdminPlatform />}
                        userType="admin"
                        to="/admin/login"
                    />
                }
            >
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Admin Stories</h1>} />
                <Route
                    path="personal-tasks"
                    element={<h1>Admin Personal Tasks</h1>}
                />
                <Route
                    path="team-members"
                    element={<h1>Admin Team Members</h1>}
                />
            </Route>

            <Route
                path="team-member/create-password"
                element={<TeamMemberCreatePassword />}
            />
            <Route path="team-member/login" element={<TeamMemberLogin />} />
            <Route
                path="team-member/forgot-password"
                element={<TeamMemberForgotPassword />}
            />
            <Route
                path="team-member/reset-password"
                element={<TeamMemberResetPassword />}
            />

            <Route
                path="team-member/platform"
                element={
                    <ProtectedRoute
                        component={<TeamMemberPlatform />}
                        userType="team-member"
                        to="/team-member/login"
                    />
                }
            >
                <Route
                    path="projects"
                    element={<h1>Team Member Projects</h1>}
                />
                <Route path="stories" element={<h1>Team Member Stories</h1>} />
                <Route
                    path="personal-tasks"
                    element={<h1>Team Member Personal Tasks</h1>}
                />
            </Route>
        </>
    )
);
