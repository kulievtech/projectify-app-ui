import { Outlet } from "react-router-dom";
import { AppContent, AppLayout, SideBarUser } from "../components";
import user from "../../assets/images/user.jpg";
import { SideBar, SideBarLinks } from "../../design-system";
import { adminLinks } from "./adminLinks";

const AdminPlatform = () => {
    return (
        <AppLayout>
            <SideBar>
                <SideBarUser
                    details={{
                        firstName: "John",
                        lastName: "John",
                        imageUrl: user,
                        email: "info@email.com"
                    }}
                />
                <SideBarLinks links={adminLinks} loggedOutLink="/admin/login" />
            </SideBar>
            <AppContent>
                <Outlet />
            </AppContent>
        </AppLayout>
    );
};

export { AdminPlatform };
