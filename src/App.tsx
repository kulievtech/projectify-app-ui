import {
    ForgotPassword,
    ResetPassword,
    TeamMemberCreatePassword,
    TeamMemberLogin
} from "./pages";

const App = () => {
    return (
        <>
            <TeamMemberCreatePassword />
            <TeamMemberLogin />
            <ForgotPassword />
            <ResetPassword />
        </>
    );
};
export { App };
