import { Task } from "../../../types";
import { MenuItem } from "../../../design-system";

export type KanbanCardProps = {
    task: Task;
    menuActions: MenuItem[];
    onSelectMenuAction: (value: string, taskId: string) => void;
};
