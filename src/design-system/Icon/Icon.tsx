import React from "react";
import sprite from "./sprite.svg";

type IconProps = {
    iconName: string;
    className?: string;
    onClick?: () => void;
};
const Icon: React.FC<IconProps> = ({ iconName, className, onClick }) => {
    return (
        <svg
            height="2.4rem"
            width="2.4rem"
            className={className || ""}
            onClick={onClick}
        >
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export { Icon };
