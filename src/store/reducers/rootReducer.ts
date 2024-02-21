import { userReducer } from "./user";
import { adminTasksReducer } from "./admin-tasks";
import { teamMemberTasksReducer } from "./team-member-tasks";
import { GlobalState } from "../state";
import { ActionType } from "../actions";
import { adminTeamMembersReducer } from "./admin-team-members";
import { adminProjectsReducer } from "./admin-projects";

const rootReducer = (state: GlobalState, action: ActionType): GlobalState => {
    const newState: GlobalState = {
        user: userReducer(state.user, action),
        adminPersonalTasks: adminTasksReducer(state.adminPersonalTasks, action),
        teamMemberPersonalTasks: teamMemberTasksReducer(
            state.teamMemberPersonalTasks,
            action
        ),
        teamMembers: adminTeamMembersReducer(state.teamMembers, action),
        projects: adminProjectsReducer(state.projects, action)
    };

    return newState;
};

export { rootReducer };
