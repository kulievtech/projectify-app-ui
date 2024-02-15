import { Task } from "../../../types";
import { MenuOption } from "../../../design-system";

export type KanbanCardProps = {
    task: Task;
    menuActions: MenuOption[];
    onSelectMenuAction: (value: string, taskId: string) => void;
};
