import React, { FC } from "react";
import "./Button.css";

type ButtonSize = "sm" | "md" | "lg";
type ButtonShape = "rounded" | "circle";
type ButtonColor = "primary" | "secondary" | "text" | "danger";

type ButtonProps = {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: ButtonColor;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
};

const sizeClassNames = {
    sm: "btn-small",
    md: "btn-medium",
    lg: "btn-large"
};

const shapeClassNames = {
    rounded: "btn-rounded",
    circle: "btn-circle"
};

const colorClassNames = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    text: "btn-tertiary",
    danger: "btn-danger"
};

const Button: FC<ButtonProps> = (props) => {
    const { size, shape, color, disabled, className, children } = props;

    const sizeClassName = size !== undefined ? sizeClassNames[size] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const finalClassNames = `btn ${colorClassName} ${sizeClassName} ${shapeClassName} ${className}`;

    return (
        <button className={finalClassNames} disabled={disabled}>
            {children}
        </button>
    );
};

export { Button };
