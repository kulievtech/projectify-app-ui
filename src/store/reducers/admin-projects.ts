import { produce } from "immer";
import {
    ActionType,
    Actions,
    AddProjectAction,
    AdminChangeProjectStatusAction,
    AdminPopulateProjectContributorsAction,
    AdminPopulateProjectsAction,
    AdminUpdateProjectAction,
    AdminUpdateProjectContributorsNumberAction
} from "../actions";
import { ProjectState } from "../state";
import { act } from "react-dom/test-utils";

const adminProjectsReducer = produce(
    (draft: ProjectState, action: ActionType) => {
        switch (action.type) {
            case Actions.ADMIN_ADD_PROJECT: {
                const payload = action.payload as AddProjectAction["payload"];
                draft[payload.id] = { ...payload, numberOfContributors: 0 };
                return draft;
            }

            case Actions.ADMIN_POPULATE_PROJECTS: {
                const payload =
                    action.payload as AdminPopulateProjectsAction["payload"];
                return payload.reduce((acc: ProjectState, project) => {
                    acc[project.id] = project;
                    return acc;
                }, {});
            }

            case Actions.ADMIN_CHANGE_PROJECT_STATUS: {
                const payload =
                    action.payload as AdminChangeProjectStatusAction["payload"];
                const project = draft[payload.id];
                if (project) {
                    project.status = payload.status;
                }
                return draft;
            }

            case Actions.ADMIN_UPDATE_PROJECT: {
                const payload =
                    action.payload as AdminUpdateProjectAction["payload"];
                const project = draft[payload.id];
                if (project) {
                    draft[payload.id] = {
                        ...draft[payload.id],
                        ...payload.data
                    };
                    return draft;
                }

                return draft;
            }

            case Actions.ADMIN_UPDATE_PROJECT_CONTRIBUTORS_NUMBER: {
                const payload =
                    action.payload as AdminUpdateProjectContributorsNumberAction["payload"];

                draft[payload.id] = {
                    ...draft[payload.id],
                    ...payload.data
                };
                return draft;
            }

            case Actions.ADMIN_POPULATE_PROJECT_CONTRIBUTORS: {
                const payload =
                    action.payload as AdminPopulateProjectContributorsAction["payload"];

                draft[payload.id].contributors = payload.data;

                return draft;
            }
        }
    }
);

export { adminProjectsReducer };
