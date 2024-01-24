import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserRole } from "../types";
import { useLocalStorage, useStore } from "../hooks";
import { admin } from "../api";
import { teamMember } from "../api";
import { Actions, InitUserAction } from "../store";

type ProtectedRouteProps = {
    component: React.ReactElement;
    userType: UserRole;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    component,
    userType
}) => {
    const [loading, setLoading] = useState(true);
    const { getItem, setItem } = useLocalStorage();
    const { dispatch } = useStore();
    const navigate = useNavigate();
    let isAuthTokenExists = getItem("authToken");

    useEffect(() => {
        if (isAuthTokenExists) {
            const user = {
                admin: admin,
                teamMember: teamMember
            };

            user[userType]
                .getMe()
                .then((data): void => {
                    const action: InitUserAction = {
                        type: Actions.INIT_USER,
                        payload: data.data
                    };
                    dispatch(action);
                    setItem("userRole", data.data.role);
                    setLoading(false);
                })
                .catch((error: Error) => {
                    setLoading(false);
                    const userRole = getItem("userRole");
                    let to = "../";
                    if (userRole) {
                        const navigateTo =
                            userRole === UserRole.admin
                                ? "../admin/platform"
                                : "../team-member/platform";
                        to = navigateTo;
                    }

                    navigate(to);
                });
        }
    }, [userType]);

    if (!isAuthTokenExists) {
        const navigateTo =
            userType === UserRole.admin
                ? "../admin/sign-in"
                : "../team-member/sign-in";
        return <Navigate to={navigateTo} />;
    }

    if (loading) {
        return <h1>Loading</h1>;
    }

    const userRole = getItem("userRole");
    const isAuthorized = userType === userRole;

    if (isAuthorized) {
        return component;
    }

    return <Navigate to="../" />;
};

export { ProtectedRoute };
