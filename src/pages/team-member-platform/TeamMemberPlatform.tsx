import { Outlet, useNavigate } from "react-router-dom";
import { AppContent, AppLayout, SideBarUser } from "../components";
import { SideBar, SideBarLinks } from "../../design-system";
import { useLocalStorage, useStore } from "../../hooks";
import { teamMemberLinks } from "./teamMemberLinks";
import { Actions } from "../../store";

const TeamMemberPlatform = () => {
    const navigate = useNavigate();
    const {
        state: { user },
        dispatch
    } = useStore();
    const { removeItem } = useLocalStorage();

    const logOut = () => {
        removeItem("authToken");
        dispatch({ type: Actions.RESET_STATE });
        navigate("/team-member/sign-in");
    };

    return (
        <AppLayout>
            <SideBar>
                <SideBarUser
                    details={{
                        firstName: "Alex",
                        lastName: "Williams",
                        email: "example@gmail.com"
                    }}
                />
                <SideBarLinks links={teamMemberLinks} logOut={logOut} />
            </SideBar>
            <AppContent>
                <Outlet />
            </AppContent>
        </AppLayout>
    );
};

export { TeamMemberPlatform };
