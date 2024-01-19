import { useContext } from "react";
import { AppContext } from "../context";

export const useStore = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("Context must be used within an AppProvider");
    }

    const { state, dispatch } = context;

    return { dispatch, state };
};
