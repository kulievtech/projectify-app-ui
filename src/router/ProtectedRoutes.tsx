import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";

interface ProtectedRoutesProps {
    userType: "admin" | "team-member";
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ userType }) => {
    const { getItem } = useLocalStorage();
    const navigate = useNavigate();

    const authToken: string | null = getItem("authToken");

    useEffect(() => {
        if (authToken === "Not Found" || !authToken) {
            navigate(`/${userType}/login`);
        }
    }, [navigate, authToken, userType]);

    return <Outlet />;
};

export { ProtectedRoutes };
