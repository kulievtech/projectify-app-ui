import React from "react";
import "./Badge.css";
import { Icon } from "../Icon";
import { Typography } from "../Typography";

type BadgeProps = {
    status: "todo" | "inprogress" | "done";
    dueDate: string;
};

const KanbanBadge: React.FC<BadgeProps> = ({ dueDate, status }) => {
    return (
        <span className={`badge-wrapper ${status}-badge-wrapper`}>
            <Icon
                iconName={status === "done" ? "check-mark" : "flag"}
                className={
                    status === "done" ? `check-mark` : `flag ${status}-flag`
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
