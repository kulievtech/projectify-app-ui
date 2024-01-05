import { Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <h1>You are at Home Page</h1>
            <Link to="admin/sign-up">Admin Sign Up</Link>
            <Link to="admin/login">Admin Login</Link>
            <Link to="admin/forgot-password">Admin Forgot Password</Link>
            <Link to="admin/reset-password">Admin Reset Password</Link>
            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/login">Team Member Login</Link>
        </>
    );
};
export { App };
