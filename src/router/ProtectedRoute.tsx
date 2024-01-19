import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserRole } from "../types";
import { useLocalStorage, useStore } from "../hooks";
import { admin } from "../api";
import { Actions, InitUserAction } from "../store";

type ProtectedRouteProps = {
    component: React.ReactElement;
    userType: UserRole;
    to: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    component,
    userType,
    to
}) => {
    const { getItem, setItem } = useLocalStorage();
    const { state, dispatch } = useStore();
    let isAuthTokenExists = getItem("authToken");

    useEffect(() => {
        if (userType === "admin") {
            admin
                .getMe()
                .then((data): void => {
                    const action: InitUserAction = {
                        type: Actions.INIT_USER,
                        payload: data.data
                    };
                    dispatch(action);
                    setItem("userRole", data.data.role);
                })
                .catch((error: Error) => {
                    console.log(error);
                });
        } else if (userType === "team-member") {
        }
    }, [dispatch, userType]);

    const isAuthorized = userType === getItem("userRole");
    if (isAuthTokenExists && isAuthorized) {
        return component;
    } else {
        return <Navigate to={to} />;
    }
};

export { ProtectedRoute };
