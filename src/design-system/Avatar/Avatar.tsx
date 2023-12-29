import React, { FC } from "react";
import "./Avatar.css";
import { trimWhiteSpaces, trimInitials } from "../utils";
import { sizeClassNames, shapeClassNames } from "./classnames";

interface AvatarProps {
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "circle";
    children?: string;
    imagePath?: string;
    className?: string;
}

type AvatarComponentProps = AvatarProps &
    (
        | {
              children: string;
              imagePath?: never;
          }
        | {
              children?: never;
              imagePath: string;
          }
    );

const Avatar: React.FC<AvatarComponentProps> = ({
    size,
    shape,
    children,
    imagePath,
    className
}) => {
    let initials;

    if (children) initials = trimInitials(children);

    const sizeClassName = size ? sizeClassNames[size] : "";
    const shapeClassName = shape ? shapeClassNames[shape] : "";

    const finalClassNames = trimWhiteSpaces(
        `avatar ${sizeClassName} ${shapeClassName} ${className || ""}`
    );

    return (
        <>
            {imagePath ? (
                <img src={imagePath} alt="Avatar" className={finalClassNames} />
            ) : (
                <button className={finalClassNames}>{initials}</button>
            )}
        </>
    );
};

export { Avatar };
