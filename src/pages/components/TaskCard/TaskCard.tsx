import styled from "styled-components";
import { TaskCardProps } from "./types";
import { Badge, Bar, Typography } from "../../../design-system";
import { format } from "date-fns";

const TaskCardBase = styled.div`
    background-color: var(--white);
    padding: var(--space-16);
    border-radius: var(--border-radius-16);
    box-shadow: var(--shadow-xs);
    display: flex;
    flex-direction: column;
    gap: var(--space-12);

    &:not(:last-of-type) {
        margin-bottom: var(--space-10);
    }
`;

const TaskCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TaskTitle = styled(Typography)`
    margin-bottom: var(--space-4);
`;

const TaskDescription = styled(Typography)`
    color: var(--jaguar-500);
`;

const TaskDue = styled(Badge)`
    align-self: flex-end;
`;

enum StatusToColor {
    TODO = "gray",
    INPROGRESS = "orange",
    DONE = "green"
}

enum StatusToIcon {
    TODO = "flag",
    INPROGRESS = "flag",
    DONE = "check"
}
const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <TaskCardBase>
            <TaskCardHeader>
                <Bar color={StatusToColor[task.status]} />
            </TaskCardHeader>
            <div>
                <TaskTitle variant="paragraphLG" weight="semibold">
                    {task?.title}
                </TaskTitle>
                <TaskDescription variant="subtitleLG" weight="medium">
                    {task?.description}
                </TaskDescription>
            </div>
            <TaskDue
                label={format(task.due, "MMMM d")}
                color={StatusToColor[task.status]}
                iconName={StatusToIcon[task.status]}
                variant="contained"
                shape="rounded"
            />
        </TaskCardBase>
    );
};

export { TaskCard };
