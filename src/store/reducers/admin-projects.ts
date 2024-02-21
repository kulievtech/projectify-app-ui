import { produce } from "immer";
import { ProjectState } from "../state";
import {
    ActionType,
    Actions,
    AdminAddProjectAction,
    AdminArchiveProjectAction,
    AdminPopulateProjectsAction,
    AdminReactivateProjectAction,
    AdminRemoveProjectAction,
    AdminUpdateProjectAction
} from "../actions";

const adminProjectsReducer = produce(
    (draft: ProjectState, action: ActionType) => {
        switch (action.type) {
            case Actions.ADMIN_ADD_PROJECT: {
                const payload =
                    action.payload as AdminAddProjectAction["payload"];
                draft.push(payload);
                return draft;
            }
            case Actions.ADMIN_POPULATE_PROJECTS: {
                const payload =
                    action.payload as AdminPopulateProjectsAction["payload"];
                return payload;
            }
            case Actions.ADMIN_ARCHIVE_PROJECT: {
                const payload =
                    action.payload as AdminArchiveProjectAction["payload"];

                for (let i = 0; i < draft.length; i++) {
                    const project = draft[i];

                    if (project.id === payload.id) {
                        project.status = "ARCHIVED";
                        break;
                    }
                }
                return draft;
            }
            case Actions.ADMIN_REMOVE_PROJECT: {
                const payload =
                    action.payload as AdminRemoveProjectAction["payload"];

                return draft.filter((project) => project.id !== payload.id);
            }
            case Actions.ADMIN_REACTIVATE_PROJECT: {
                const payload =
                    action.payload as AdminReactivateProjectAction["payload"];
                for (let i = 0; i < draft.length; i++) {
                    const project = draft[i];

                    if (project.id === payload.id) {
                        project.status = "ACTIVE";
                        break;
                    }
                }
                return draft;
            }
            case Actions.ADMIN_UPDATE_PROJECT: {
                const payload =
                    action.payload as AdminUpdateProjectAction["payload"];

                for (let i = 0; i < draft.length; i++) {
                    const project = draft[i];

                    if (project.id === payload.id) {
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

export { adminProjectsReducer };
