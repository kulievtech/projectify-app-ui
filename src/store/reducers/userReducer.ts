import {
    ActionType,
    Actions,
    AddTaskAction,
    ChangeTaskStatusAction,
    PopulateTasksAction,
    UpdateTaskAction,
    RemoveTaskAction
} from "../actions";
import { GlobalState, initialState } from "../state";

export const userReducer = (
    state: GlobalState,
    action: ActionType
): GlobalState => {
    switch (action.type) {
        case Actions.INIT_USER:
            return {
                ...state,
                user: action.payload
            };
        case Actions.RESET_STATE:
            return initialState;
        case Actions.POPULATE_TASKS: {
            const payload = action.payload as PopulateTasksAction["payload"];

            if (state.user?.role === "admin") {
                return {
                    ...state,
                    adminPersonalTasks: payload
                };
            } else {
                return {
                    ...state,
                    teamMemberPersonalTasks: payload
                };
            }
        }
        case Actions.ADD_TASK: {
            const payload = action.payload as AddTaskAction["payload"];

            if (state.adminPersonalTasks) {
                return {
                    ...state,
                    adminPersonalTasks: [...state.adminPersonalTasks, payload],
                    teamMemberPersonalTasks: [
                        ...state.teamMemberPersonalTasks,
                        payload
                    ]
                };
            } else {
                return {
                    ...state,
                    adminPersonalTasks: [payload]
                };
            }
        }
        case Actions.CHANGE_TASK_STATUS: {
            const payload = action.payload as ChangeTaskStatusAction["payload"];
            const updatedTasks = state.adminPersonalTasks.map((task) => {
                if (task.id === payload.id) {
                    return { ...task, status: payload.status };
                } else {
                    return { ...task };
                }
            });
            return {
                ...state,
                adminPersonalTasks: updatedTasks
            };
        }
        case Actions.UPDATE_TASK: {
            const payload = action.payload as UpdateTaskAction["payload"];
            const updatedTasks = state.adminPersonalTasks.map((task) => {
                if (task.id === payload.id) {
                    return payload;
                } else {
                    return { ...task };
                }
            });

            return {
                ...state,
                adminPersonalTasks: updatedTasks
            };
        }
        case Actions.REMOVE_TASK: {
            const payload = action.payload as RemoveTaskAction["payload"];

            return {
                ...state,
                adminPersonalTasks: state.adminPersonalTasks.filter(
                    (task) => task.id !== payload.id
                )
            };
        }
        default:
            return state;
    }
};
