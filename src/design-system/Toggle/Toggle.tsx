import React from "react";
import "./Toggle.css";
import { trimWhiteSpaces } from "../utils";

interface ToggleProps {
    value: boolean;
    className?: string;
    onToggle: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ value, onToggle, className }) => {
    const handleOnClick = () => {
        onToggle(!value);
    };

    const trackClassNames = trimWhiteSpaces(
        `toggle__track ${value ? "toggle__track--on" : ""} ${
            className ? className : ""
        }`
    );
    const thumbClassNames = trimWhiteSpaces(
        `toggle__thumb ${value ? "toggle__thumb--on" : ""}`
    );
    return (
        <div className={trackClassNames} onClick={handleOnClick}>
            <div className={thumbClassNames}></div>
        </div>
    );
};

export { Toggle };
