import {
    ActionType,
    Actions,
    AddTaskAction,
    ChangeTaskStatusAction,
    PopulateTasksAction
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
            return {
                ...state,
                adminPersonalTasks: payload
            };
        }
        case Actions.ADD_TASK: {
            const payload = action.payload as AddTaskAction["payload"];

            if (state.adminPersonalTasks) {
                return {
                    ...state,
                    adminPersonalTasks: [...state.adminPersonalTasks, payload]
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
        default:
            return state;
    }
};
