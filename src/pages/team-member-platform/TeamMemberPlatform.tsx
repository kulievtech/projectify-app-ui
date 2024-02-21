import { Outlet, useNavigate } from "react-router-dom";
import { AppPage, AppLayout, SideBarUser } from "../components";
import { useLocalStorage, useStore } from "../../hooks";
import { SideBar, SideBarLinks, Toaster } from "../../design-system";
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
                <AppPage>
                    <Outlet />
                </AppPage>
            </AppLayout>
            <Toaster />
        </>
    );
};

export { TeamMemberPlatform };
