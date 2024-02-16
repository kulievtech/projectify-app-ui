import { produce } from "immer";
import { TeamMemberState } from "../state";
import {
    ActionType,
    Actions,
    AdminPopulateTeamMembersAction,
    AdminAddTeamMemberAction,
    AdminRemoveTeamMemberAction,
    AdminDeactivateTeamMemberAction,
    AdminReactivateTeamMemberAction,
    AdminUpdateTeamMemberAction
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

                for (let i = 0; i < draft.length; i++) {
                    const teamMember = draft[i];

                    if (teamMember.id === payload.id) {
                        teamMember.status = "DEACTIVATED";
                        break;
                    }
                }
                return draft;
            }
            case Actions.ADMIN_REACTIVATE_TEAM_MEMBER: {
                const payload =
                    action.payload as AdminReactivateTeamMemberAction["payload"];
                for (let i = 0; i < draft.length; i++) {
                    const teamMember = draft[i];

                    if (teamMember.id === payload.id) {
                        teamMember.status = "ACTIVE";
                        break;
                    }
                }
                return draft;
            }
            case Actions.ADMIN_UPDATE_TEAM_MEMBER: {
                const payload =
                    action.payload as AdminUpdateTeamMemberAction["payload"];

                for (let i = 0; i < draft.length; i++) {
                    const teamMember = draft[i];

                    if (teamMember.id === payload.id) {
                        draft[i] = payload;
                        break;
                    }
                }
                return draft;
            }
            default:
                return draft;
        }
    }
);

export { adminTeamMembersReducer };
