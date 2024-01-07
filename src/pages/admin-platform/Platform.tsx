import { Outlet } from "react-router-dom";
import { AppContent, AppLayout, SideBarUser } from "../components";
import user from "../../assets/images/user.jpg";
import { SideBar, SideBarLinks } from "../../design-system";

const links = [
    {
        title: "Menu",
        links: [
            {
                linkText: "Project",
                linkTo: "projects",
                iconName: "projects"
            },
            {
                linkText: "Stories",
                linkTo: "stories",
                iconName: "stories"
            },
            {
                linkText: "Personal Tasks",
                linkTo: "personal-tasks",
                iconName: "tasks"
            },
            {
                linkText: "Team Members",
                linkTo: "team-members",
                iconName: "members"
            }
        ]
    },
    {
        title: "Settings",
        links: [
            {
                linkText: "Settings",
                linkTo: "settings",
                iconName: "settings"
            },
            {
                linkText: "Support",
                linkTo: "support",
                iconName: "support"
            }
        ]
    }
];

const Platform = () => {
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
                <SideBarLinks links={links} />
            </SideBar>
            <AppContent>
                <Outlet />
            </AppContent>
        </AppLayout>
    );
};

export { Platform as AdminPlatform };
