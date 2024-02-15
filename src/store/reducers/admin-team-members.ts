import { produce } from "immer";
import { TeamMemberState } from "../state";
import {
    ActionType,
    Actions,
    AdminPopulateTeamMembersAction,
    AdminAddTeamMemberAction,
    AdminRemoveTeamMemberAction,
    AdminDeactivateTeamMemberAction,
    AdminReactivateTeamMemberAction
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
            case Actions.ADMIN_DEACTIVATE_TEAM_MEMBER: {
                const payload =
                    action.payload as AdminDeactivateTeamMemberAction["payload"];

                draft.map((teamMember) => {
                    if (teamMember.id === payload.id) {
                        teamMember.status = "DEACTIVATED";
                    }
                    return teamMember;
                });
                return draft;
            }
            case Actions.ADMIN_REACTIVATE_TEAM_MEMBER: {
                const payload =
                    action.payload as AdminReactivateTeamMemberAction["payload"];

                draft.map((teamMember) => {
                    if (teamMember.id === payload.id) {
                        teamMember.status = "ACTIVE";
                    }
                    return teamMember;
                });
                return draft;
            }
            default:
                return draft;
        }
    }
);

export { adminTeamMembersReducer };
