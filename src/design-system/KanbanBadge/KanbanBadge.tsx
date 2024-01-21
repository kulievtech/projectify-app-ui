import React from "react";
import "./KanbanBadge.css";
import { Icon } from "../Icon";
import { Typography } from "../Typography";

type BadgeProps = {
    status: "TODO" | "INPROGRESS" | "DONE";
    dueDate: string;
};

const KanbanBadge: React.FC<BadgeProps> = ({ dueDate, status }) => {
    return (
        <span className={`kanban-badge-wrapper ${status}-badge-wrapper`}>
            <Icon
                iconName={status === "DONE" ? "check-mark" : "flag"}
                className={
                    status === "DONE" ? `check-mark` : `flag ${status}-flag`
                }
            />
            <Typography
                variant="subtitleLG"
                weight="semibold"
                className={`${status}-due-date`}
            >
                {dueDate}
            </Typography>
        </span>
    );
};

export { KanbanBadge };
