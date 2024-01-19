import { ActionType, Actions } from "../actions";
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
    }

    return state;
};
