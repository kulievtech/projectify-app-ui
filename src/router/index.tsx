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
    TeamMemberResetPassword
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
            <Route
                path="/team-member/forgot-password"
                element={<TeamMemberResetPassword />}
            ></Route>
            <Route
                path="/team-member/reset-password"
                element={<TeamMemberResetPassword />}
            ></Route>
            <Route path="/admin/platform" element={<AdminPlatform />}>
                <Route path="projects" element={<AdminProjects />} />
                <Route path="stories" element={<h1>Admin Stories</h1>} />
                <Route
                    path="personal-tasks"
                    element={<h1>Admin Personal Tasks</h1>}
                />
                <Route path="team-members" element={<h1>Admin Members</h1>} />
            </Route>
            <Route
                path="/team-member/platform"
                element={<TeamMemberPlatform />}
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
