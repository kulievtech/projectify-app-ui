import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Typography } from "../Typography";
import { Icon } from "../Icon";
import { SideBarLinksProps } from "./types";

const SideBarLinks: React.FC<SideBarLinksProps> = ({ links, logOut }) => {
    return (
        <>
            {links.map((group, idx) => {
                return (
                    <div className="side-bar__link-group" key={idx}>
                        <Typography
                            variant="subtitleMD"
                            weight="semibold"
                            className="side-bar__link-group-title"
                        >
                            {group.title.toUpperCase()}
                        </Typography>
                        <ul className="side-bar__links">
                            {group.links.map((link, idx) => {
                                return (
                                    <li
                                        className="side-bar__link-item"
                                        key={idx}
                                    >
                                        <NavLink
                                            to={link.linkTo}
                                            className="side-bar__link"
                                        >
                                            <Icon
                                                iconName={link.iconName}
                                                className="side-bar__link-icon"
                                            />
                                            {link.linkText}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}

            <div className="side-bar__log-out-wrapper">
                <div className="side-bar__log-out" onClick={logOut}>
                    <Icon iconName="log-out" className="log-out-icon" />
                    <Link to="" className="side-bar__log-out-link">
                        Log Out
                    </Link>
                </div>
            </div>
        </>
    );
};

export { SideBarLinks };
