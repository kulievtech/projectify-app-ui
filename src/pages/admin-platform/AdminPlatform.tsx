import { useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { SideBar, SideBarLinks, Toaster } from "../../design-system";
import { AppContent, AppLayout, SideBarUser } from "../components";
import { admin } from "../../api";
import toast from "react-hot-toast";
import { Actions, InitUserAction } from "../../store/actions";
import { useLocalStorage, useStore } from "../../hooks";
import { adminLinks } from "./adminLinks";

const AdminPlatform = () => {
    const {
        state: { user },
        dispatch
    } = useStore();

    const navigate = useNavigate();
    const { removeItem } = useLocalStorage();

    const logOut = () => {
        removeItem("authToken");
        removeItem("userRole");
        dispatch({ type: Actions.RESET_STATE });
        navigate("/admin/login");
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
                    <SideBarLinks links={adminLinks} logOut={logOut} />
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
