import {
    AdminUser,
    Project,
    ProjectContributors,
    ProjectStatus,
    ProjectUpdate,
    ProjectWithContributors,
    Task,
    TaskStatus,
    TaskUpdate,
    TeamMember,
    TeamMemberStatus,
    TeamMemberUpdate,
    TeamMemberUser
} from "../../types";

export enum Actions {
    INIT_USER = "INIT_USER",
    UPDATE_USER = "UPDATE_USER",
    RESET_STATE = "RESET_STATE",
    POPULATE_TASKS = "POPULATE_TASKS",
    ADD_TASK = "ADD_TASK",
    CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS",
    UPDATE_TASK = "UPDATE_TASK",
    REMOVE_TASK = "REMOVE_TASK",

    ADMIN_ADD_TEAM_MEMBER = "ADMIN_ADD_TEAM_MEMBER",
    ADMIN_POPULATE_TEAM_MEMBERS = "ADMIN_POPULATE_TEAM_MEMBERS",
    ADMIN_REMOVE_TEAM_MEMBER = "ADMIN_REMOVE_TEAM_MEMBER",
    ADMIN_CHANGE_TEAM_MEMBER_STATUS = "ADMIN_CHANGE_TEAM_MEMBER_STATUS",
    ADMIN_UPDATE_TEAM_MEMBER = "ADMIN_UPDATE_TEAM_MEMBER",

    ADMIN_ADD_PROJECT = "ADMIN_ADD_PROJECT",
    ADMIN_POPULATE_PROJECTS = "ADMIN_POPULATE_PROJECTS",
    ADMIN_CHANGE_PROJECT_STATUS = "ADMIN_CHANGE_PROJECT_STATUS",
    ADMIN_UPDATE_PROJECT = "ADMIN_UPDATE_PROJECT",
    ADMIN_UPDATE_PROJECT_CONTRIBUTORS_NUMBER = "ADMIN_UPDATE_PROJECT_CONTRIBUTORS_NUMBER",
    ADMIN_POPULATE_PROJECT_CONTRIBUTORS = "ADMIN_POPULATE_PROJECT_CONTRIBUTORS"
}

export interface InitUserAction {
    type: Actions;
    payload: AdminUser | TeamMemberUser;
}
export interface ResetStateAction {
    type: Actions.RESET_STATE;
}
export interface UpdateUserAction {
    type: Actions;
    payload: {
        firstName: string;
        lastName: string;
        preferredFirstName?: string;
    };
}

export interface PopulateTasksAction {
    type: Actions.POPULATE_TASKS;
    payload: Task[];
}

export interface AddTaskAction {
    type: Actions.ADD_TASK;
    payload: Task;
}

export type ChangeTaskStatusAction = {
    type: Actions.CHANGE_TASK_STATUS;
    payload: {
        id: string;
        status: TaskStatus;
    };
};

export type UpdateTaskAction = {
    type: Actions.UPDATE_TASK;
    payload: {
        id: string;
        data: TaskUpdate;
    };
};

export type RemoveTaskAction = {
    type: Actions.REMOVE_TASK;
    payload: {
        id: string;
    };
};

export type AdminAddTeamMemberAction = {
    type: Actions.ADMIN_ADD_TEAM_MEMBER;
    payload: TeamMember;
};

export type AdminPopulateTeamMembersAction = {
    type: Actions.ADMIN_POPULATE_TEAM_MEMBERS;
    payload: TeamMember[];
};

export type AdminRemoveTeamMemberAction = {
    type: Actions.ADMIN_REMOVE_TEAM_MEMBER;
    payload: {
        id: string;
    };
};

export type AdminChangeTeamMemberStatusAction = {
    type: Actions.ADMIN_CHANGE_TEAM_MEMBER_STATUS;
    payload: {
        id: string;
        status: TeamMemberStatus;
    };
};

export type AdminUpdateTeamMemberAction = {
    type: Actions.ADMIN_UPDATE_TEAM_MEMBER;
    payload: {
        id: string;
        data: TeamMemberUpdate;
    };
};

export type AddProjectAction = {
    type: Actions.ADMIN_ADD_PROJECT;
    payload: Project;
};

export type AdminPopulateProjectsAction = {
    type: Actions.ADMIN_POPULATE_PROJECTS;
    payload: ProjectWithContributors[];
};

export type AdminChangeProjectStatusAction = {
    type: Actions.ADMIN_CHANGE_PROJECT_STATUS;
    payload: { id: string; status: ProjectStatus };
};

export type AdminUpdateProjectAction = {
    type: Actions.ADMIN_UPDATE_PROJECT;
    payload: {
        id: string;
        data: ProjectUpdate;
    };
};

export type AdminUpdateProjectContributorsNumberAction = {
    type: Actions.ADMIN_UPDATE_PROJECT_CONTRIBUTORS_NUMBER;
    payload: {
        id: string;
        data: {
            operation: "ADD" | "SUBTRACT";
            quantity: number;
        };
    };
};

export type AdminPopulateProjectContributorsAction = {
    type: Actions.ADMIN_POPULATE_PROJECT_CONTRIBUTORS;
    payload: { id: string; data: ProjectContributors };
};

export type ActionType =
    | InitUserAction
    | UpdateUserAction
    | ResetStateAction
    | PopulateTasksAction
    | AddTaskAction
    | ChangeTaskStatusAction
    | UpdateTaskAction
    | RemoveTaskAction
    | AdminAddTeamMemberAction
    | AdminPopulateTeamMembersAction
    | AdminRemoveTeamMemberAction
    | AdminChangeTeamMemberStatusAction
    | AdminUpdateTeamMemberAction
    | AddProjectAction
    | AdminPopulateProjectsAction
    | AdminChangeProjectStatusAction
    | AdminUpdateProjectAction
    | AdminPopulateProjectContributorsAction
    | AdminUpdateProjectContributorsNumberAction;
