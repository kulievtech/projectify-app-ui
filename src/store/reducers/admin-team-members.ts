import { produce } from "immer";
import { TeamMemberState } from "../state";
import {
    ActionType,
    Actions,
    AdminPopulateTeamMembersAction,
    AdminAddTeamMemberAction,
    AdminRemoveTeamMemberAction
} from "../actions";

const adminTeamMembersReducer = produce(
    (draft: TeamMemberState, action: ActionType) => {
        switch (action.type) {
            case Actions.ADMIN_ADD_TEAM_MEMBER: {
                const payload =
                    action.payload as AdminAddTeamMemberAction["payload"];
                draft.push(payload);
                return draft;
            }
            case Actions.ADMIN_POPULATE_TEAM_MEMBERS: {
                const payload =
                    action.payload as AdminPopulateTeamMembersAction["payload"];
                return payload;
            }
            case Actions.ADMIN_REMOVE_TEAM_MEMBER: {
                const payload =
                    action.payload as AdminRemoveTeamMemberAction["payload"];

                return draft.filter(
                    (teamMember) => teamMember.id !== payload.id
                );
            }
            default:
                return draft;
        }
    }
);

export { adminTeamMembersReducer };
