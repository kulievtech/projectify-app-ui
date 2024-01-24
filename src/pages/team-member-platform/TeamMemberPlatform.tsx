import { Outlet, useNavigate } from "react-router-dom";
import { AppContent, AppLayout, SideBarUser } from "../components";
import { SideBar, SideBarLinks } from "../../design-system";
import { useLocalStorage, useStore } from "../../hooks";
import { teamMemberLinks } from "./teamMemberLinks";
import { Actions } from "../../store";
import { Toaster } from "react-hot-toast";

const TeamMemberPlatform = () => {
    const navigate = useNavigate();
    const {
        state: { user },
        dispatch
    } = useStore();
    const { removeItem } = useLocalStorage();

    const logOut = () => {
        removeItem("authToken");
        removeItem("userRole");
        dispatch({ type: Actions.RESET_STATE });
        navigate("/team-member/login");
    };

    return (
        <>
            <AppLayout>
                <SideBar>
                    <SideBarUser
                        details={{
                            firstName: user?.firstName || "",
                            lastName: user?.lastName || "",
                            imageUrl: "",
                            email: user?.email || ""
                        }}
                    />
                    <SideBarLinks links={teamMemberLinks} logOut={logOut} />
                </SideBar>
                <AppContent>
                    <Outlet />
                </AppContent>
            </AppLayout>
            <Toaster />
        </>
    );
};

export { TeamMemberPlatform };
