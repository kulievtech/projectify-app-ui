import { userReducer } from "./user";
import { adminTasksReducer } from "./admin-tasks";
import { teamMemberTasksReducer } from "./team-member-tasks";
import { GlobalState } from "../state";
import { ActionType } from "../actions";
import { adminTeamMembersReducer } from "./admin-team-members";

const rootReducer = (state: GlobalState, action: ActionType): GlobalState => {
    const newState: GlobalState = {
        user: userReducer(state.user, action),
        adminPersonalTasks: adminTasksReducer(state.adminPersonalTasks, action),
        teamMemberPersonalTasks: teamMemberTasksReducer(
            state.teamMemberPersonalTasks,
            action
        ),
        teamMembers: adminTeamMembersReducer(state.teamMembers, action)
    };

    return newState;
};

export { rootReducer };
