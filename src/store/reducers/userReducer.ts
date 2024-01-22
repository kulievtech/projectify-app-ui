import { stat } from "fs";
import {
    ActionType,
    Actions,
    AddTaskAction,
    PopulateTasksAction
} from "../actions";
import { GlobalState, initialState } from "../state";

export const userReducer = (
    state: GlobalState,
    action: ActionType
): GlobalState => {
    if (action.type === Actions.INIT_USER) {
        return {
            ...state,
            user: action.payload
        };
    } else if (action.type === Actions.RESET_STATE) {
        return initialState;
    } else if (action.type === Actions.POPULATE_TASKS) {
        const payload = action.payload as PopulateTasksAction["payload"];

        return {
            ...state,
            adminPersonalTasks: payload
        };
    } else if (action.type === Actions.ADD_TASK) {
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

    return state;
};
