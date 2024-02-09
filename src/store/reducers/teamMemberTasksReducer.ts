import {
    ActionType,
    Actions,
    AddTaskAction,
    ChangeTaskStatusAction,
    PopulateTasksAction,
    RemoveTaskAction,
    UpdateTaskAction
} from "../actions";
import { TaskState } from "../state";

const teamMemberTasksReducer = (
    state: TaskState,
    action: ActionType
): TaskState => {
    switch (action.type) {
        case Actions.POPULATE_TASKS: {
            const payload = action.payload as PopulateTasksAction["payload"];
            return payload;
        }
        case Actions.ADD_TASK: {
            const payload = action.payload as AddTaskAction["payload"];
            return [...state, payload];
        }
        case Actions.CHANGE_TASK_STATUS: {
            const payload = action.payload as ChangeTaskStatusAction["payload"];

            const updatedTasks = state.map((task) => {
                if (task.id === payload.id) {
                    return { ...task, status: payload.status };
                } else {
                    return { ...task };
                }
            });
            return updatedTasks;
        }

        case Actions.UPDATE_TASK: {
            const payload = action.payload as UpdateTaskAction["payload"];
            const updatedTasks = state.map((task) => {
                if (task.id === payload.id) {
                    return payload;
                } else {
                    return { ...task };
                }
            });

            return updatedTasks;
        }

        case Actions.REMOVE_TASK: {
            const payload = action.payload as RemoveTaskAction["payload"];

            return state.filter((task) => task.id !== payload.id);
        }

        case Actions.RESET_STATE: {
            return [];
        }
        default:
            return state;
    }
};

export { teamMemberTasksReducer };
