import React, { FC } from "react";
import "./Button.css";
import { sizeClassNames, shapeClassNames, colorClassNames } from "./classnames";

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

const Button: FC<ButtonProps> = (props) => {
    const { size, shape, color, disabled, className, children } = props;

    const sizeClassName = size !== undefined ? sizeClassNames[size] : "";

    const shapeClassName = shape !== undefined ? shapeClassNames[shape] : "";

    const colorClassName = color !== undefined ? colorClassNames[color] : "";

    const finalClassNames =
        `btn ${colorClassName} ${sizeClassName} ${shapeClassName} ${
            className || ""
        }`.trim();

    return (
        <button className={finalClassNames} disabled={disabled}>
            {children}
        </button>
    );
};

export { Button };
