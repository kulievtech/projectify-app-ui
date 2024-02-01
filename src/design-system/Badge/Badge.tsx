import React from "react";
import "./Badge.css";
import { trimWhiteSpaces } from "../utils";

type BadgeColors =
    | "violet"
    | "orange"
    | "green"
    | "blue"
    | "red"
    | "purple"
    | "gray";

type BadgeShape = "rounded" | "circle";

type BadgeVariant = "contained" | "outlined";

interface BadgeProps {
    label: string;
    color: BadgeColors;
    shape?: BadgeShape;
    variant?: BadgeVariant;
    icon?: React.ReactElement;
    className?: string;
}

const shapeClassNames = {
    rounded: "btn-rounded",
    circle: "btn-circle"
};

const variantClassNames = {
    contained: "badge-contained",
    outlined: "badge-outlined"
};

const colorClassNames = {
    violet: "badge-violet",
    orange: "badge-orange",
    green: "badge-green",
    blue: "badge-blue",
    red: "badge-red",
    purple: "badge-purple",
    gray: "badge-gray"
};

const Badge: React.FC<BadgeProps> = ({
    label,
    color,
    shape,
    variant,
    icon,
    className
}) => {
    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const variantClassName =
        variant !== undefined ? variantClassNames[variant] : "";

    const finalClassNames = `badge ${colorClassName}  ${shapeClassName} ${variantClassName} ${
        className || ""
    }`;
    return (
        <div className={trimWhiteSpaces(finalClassNames)}>
            <span className="badge__text">{label}</span>
        </div>
    );
};

export { Badge };
