import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SideBar, SideBarLinks, Toaster } from "../../design-system";
import { AppContent, AppLayout, SideBarUser } from "../components";
import { admin } from "../../api";
import toast from "react-hot-toast";
import { Actions } from "../../store/actions";
import { useStore } from "../../hooks";
import { adminLinks } from "./adminLinks";

const AdminPlatform = () => {
    const {
        state: { user },
        dispatch
    } = useStore();
    useEffect(() => {
        admin
            .getMe()
            .then((data): void => {
                dispatch({
                    type: Actions.INIT_USER,
                    payload: data.data
                });
            })
            .catch((error: Error) => {
                toast.error(error.message);
            });
    }, []);

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
                    <SideBarLinks
                        links={adminLinks}
                        loggedOutLink="/admin/login"
                    />
                </SideBar>
                <AppContent>
                    <Outlet />
                </AppContent>
            </AppLayout>
            <Toaster />
        </>
    );
};

export { AdminPlatform };
