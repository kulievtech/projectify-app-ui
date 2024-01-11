import { Outlet } from "react-router-dom";
import { AppContent, AppLayout, SideBarUser } from "../components";
import user from "../../assets/images/user2.jpg";
import { SideBar, SideBarLinks } from "../../design-system";
import { teamMemberLinks } from "./teamMemberLinks";

const TeamMemberPlatform = () => {
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
                <SideBarLinks
                    links={teamMemberLinks}
                    loggedOutLink="../team-member/login"
                />
            </SideBar>
            <AppContent>
                <Outlet />
            </AppContent>
        </AppLayout>
    );
};

export { TeamMemberPlatform };
