import {
    ActionType,
    Actions,
    InitUserAction,
    UpdateUserAction
} from "../actions";
import { UserState } from "../state";

export const userReducer = (
    state: UserState,
    action: ActionType
): UserState => {
    switch (action.type) {
        case Actions.INIT_USER: {
            const payload = action.payload as InitUserAction["payload"];
            return payload;
        }
        case Actions.UPDATE_USER: {
            const payload = action.payload as UpdateUserAction["payload"];
            if (state === null) {
                state = null;
            } else {
                state.firstName = payload.firstName;
                state.lastName = payload.lastName;
                state.preferredFirstName = payload.preferredFirstName;
            }
            return state;
        }
        case Actions.RESET_STATE:
            return null;
        default:
            return state;
    }
};
