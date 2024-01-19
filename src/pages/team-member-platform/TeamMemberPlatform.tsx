import { Outlet, useNavigate } from "react-router-dom";
import { AppContent, AppLayout, SideBarUser } from "../components";
import user from "../../assets/images/user2.jpg";
import { SideBar, SideBarLinks } from "../../design-system";
import { useLocalStorage } from "../../hooks";
import { teamMemberLinks } from "./teamMemberLinks";

const TeamMemberPlatform = () => {
    const navigate = useNavigate();
    const { removeItem } = useLocalStorage();

    const logOut = () => {
        navigate("admin/sign-in");
    };

    return (
        <AppLayout>
            <SideBar>
                <SideBarUser
                    details={{
                        firstName: "Alex",
                        lastName: "Williams",
                        imageUrl: user,
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
