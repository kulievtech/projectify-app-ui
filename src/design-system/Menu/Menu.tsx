import React, { useState } from "react";
import { MenuProps } from "./types";
import "./Menu.css";
import { Icon } from "../Icon";
import { trimWhiteSpaces } from "../utils";

const variantClassNames = {
    primary: "menu__item--primary",
    danger: "menu__item--danger"
};

const Menu: React.FC<MenuProps> = ({
    items,
    onSelect,
    customTrigger,
    className
}) => {
    const [show, setShow] = useState(false);

    const handleOnSelect = (value: string) => {
        setShow(false);
        onSelect(value);
    };

    const handleTriggerClick = () => {
        setShow((prevState) => !prevState);
    };

    const finalClassNames = trimWhiteSpaces(
        `menu ${className ? className : ""}`
    );

    return (
        <div className={finalClassNames}>
            <Icon iconName="three-dots" onClick={handleTriggerClick} />
            {show ? (
                <ul className="menu__items">
                    {items.map((item) => {
                        return (
                            <li
                                key={item.label}
                                className={trimWhiteSpaces(
                                    `menu__item ${
                                        item.variant
                                            ? variantClassNames[item.variant]
                                            : ""
                                    }`
                                )}
                                onClick={() => handleOnSelect(item.value)}
                            >
                                {item.iconName ? (
                                    <Icon iconName={item.iconName} />
                                ) : null}
                                {item.label}
                            </li>
                        );
                    })}
                </ul>
            ) : null}
        </div>
    );
};

export { Menu };
