import { Link } from "react-router-dom";
import styled from "styled-components";
import { Badge } from "./design-system";

const AppWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    font-size: 2rem;
`;

const App = () => {
    return (
        <AppWrapper>
            <Link to="admin/sign-up">Admin Sign Up</Link>
            <Link to="admin/login">Admin Login</Link>
            <Link to="admin/forgot-password">Admin Forgot Password</Link>
            <Link to="admin/reset-password">Admin Reset Password</Link>

            <Link to="admin/platform">Admin Platform</Link>
            <Link to="admin/platform/projects">Admin Projects</Link>
            <Link to="admin/platform/stories">Admin Stories</Link>
            <Link to="admin/platform/personal-tasks">Admin Personal Tasks</Link>
            <Link to="admin/platform/team-members">Admin Team Members</Link>

            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/login">Team Member Login</Link>
            <Link to="team-member/forgot-password">
                Team Member Forgot Password
            </Link>
            <Link to="team-member/reset-password">
                Team Member Reset Password
            </Link>
            <Link to="team-member/platform">Team Member Platform</Link>
            <Link to="team-member/platform/projects">Team Member Projects</Link>
            <Link to="team-member/platform/stories">Team Member Stories</Link>
            <Link to="team-member/platform/personal-tasks">
                Team Member Personal Tasks
            </Link>
            <Badge status="done" dueDate="Dec 16" />
        </AppWrapper>
    );
};
export { App };
