import React from "react";

import "./Sidebar.css";
import { Logo } from "../Logo";
import { Avatar } from "../Avatar";
import { Typography } from "../Typography";

import guyImg from "../../assets/images/young-man.png";
import arrowImg from "../../assets/images/arrow.svg";
import projectsImg from "../../assets/images/menu-projects.svg";
import storiesImg from "../../assets/images/menu-stories.svg";
import personalTasksImg from "../../assets/images/menu-personal-tasks.svg";
import teamMembersImg from "../../assets/images/menu-team-members.svg";
import settingsImg from "../../assets/images/settings.svg";
import supportImg from "../../assets/images/support.svg";
import logoutImg from "../../assets/images/log-out.svg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Logo size="sm" layout="horizontal" className="logo"></Logo>
            <div className="me">
                <Avatar
                    imagePath={guyImg}
                    shape="circle"
                    size="lg"
                    className="avatar"
                />
                <div className="me-details">
                    <Typography
                        variant="paragraphSM"
                        weight="medium"
                        align="left"
                    >
                        Jason Bourne
                    </Typography>
                    <Typography
                        variant="subtitleSM"
                        weight="medium"
                        align="left"
                    >
                        jason.bourne@gmail.com
                    </Typography>
                </div>
                <img src={arrowImg} alt="arrow" />
            </div>
            <nav className="pages">
                <div className="menu">
                    <Typography
                        variant="subtitleMD"
                        weight="semibold"
                        align="left"
                        className="menu-title"
                    >
                        Menu
                    </Typography>
                    <ul>
                        <li>
                            <img src={projectsImg} alt="projects" />
                            <Typography variant="paragraphSM" weight="medium">
                                Projects
                            </Typography>
                        </li>
                        <li>
                            <img src={storiesImg} alt="stories" />
                            <Typography variant="paragraphSM" weight="medium">
                                Stories
                            </Typography>
                        </li>
                        <li>
                            <img src={personalTasksImg} alt="personal task" />
                            <Typography variant="paragraphSM" weight="medium">
                                Personal Tasks
                            </Typography>
                        </li>
                        <li>
                            <img src={teamMembersImg} alt="team members" />
                            <Typography variant="paragraphSM" weight="medium">
                                Team Members
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div className="settings">
                    <Typography
                        variant="subtitleMD"
                        weight="semibold"
                        align="left"
                        className="settings-title"
                    >
                        Settings
                    </Typography>
                    <ul>
                        <li>
                            <img src={settingsImg} alt="projects" />
                            <Typography variant="paragraphSM" weight="medium">
                                Settings
                            </Typography>
                        </li>
                        <li>
                            <img src={supportImg} alt="projects" />
                            <Typography variant="paragraphSM" weight="medium">
                                Support
                            </Typography>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="logout">
                <img src={logoutImg} alt="log out" />
                <Typography variant="paragraphSM" weight="medium">
                    Log Out
                </Typography>
            </div>
        </div>
    );
};

export { Sidebar };
