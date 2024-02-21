import {
    AdminUser,
    Project,
    Task,
    TaskStatus,
    TeamMember,
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
    ADMIN_DEACTIVATE_TEAM_MEMBER = "ADMIN_DEACTIVATE_TEAM_MEMBER",
    ADMIN_REACTIVATE_TEAM_MEMBER = "ADMIN_REACTIVATE_TEAM_MEMBER",
    ADMIN_UPDATE_TEAM_MEMBER = "ADMIN_UPDATE_TEAM_MEMBER",

    ADMIN_ADD_PROJECT = "ADMIN_ADD_PROJECT",
    ADMIN_POPULATE_PROJECTS = "ADMIN_POPULATE_PROJECTS",
    ADMIN_ARCHIVE_PROJECT = "ADMIN_ARCHIVE_PROJECT",
    ADMIN_REMOVE_PROJECT = "ADMIN_REMOVE_PROJECT",
    ADMIN_REACTIVATE_PROJECT = "ADMIN_REACTIVATE_PROJECT"
}

export interface InitUserAction {
    type: Actions;
    payload: AdminUser | TeamMemberUser;
}

export interface UpdateUserAction {
    type: Actions;
    payload: {
        firstName: string;
        lastName: string;
        preferredFirstName?: string;
    };
}

export interface ResetStateAction {
    type: Actions.RESET_STATE;
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
    payload: Task;
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

export type AdminDeactivateTeamMemberAction = {
    type: Actions.ADMIN_DEACTIVATE_TEAM_MEMBER;
    payload: {
        id: string;
    };
};

export type AdminReactivateTeamMemberAction = {
    type: Actions.ADMIN_REACTIVATE_TEAM_MEMBER;
    payload: {
        id: string;
    };
};

export type AdminUpdateTeamMemberAction = {
    type: Actions.ADMIN_UPDATE_TEAM_MEMBER;
    payload: TeamMember;
};

export type AdminAddProjectAction = {
    type: Actions.ADMIN_ADD_PROJECT;
    payload: Project;
};

export type AdminPopulateProjectsAction = {
    type: Actions.ADMIN_POPULATE_PROJECTS;
    payload: Project[];
};

export type AdminArchiveProjectAction = {
    type: Actions.ADMIN_ARCHIVE_PROJECT;
    payload: {
        id: string;
    };
};

export type AdminRemoveProjectAction = {
    type: Actions.ADMIN_REMOVE_PROJECT;
    payload: {
        id: string;
    };
};

export type AdminReactivateProjectAction = {
    type: Actions.ADMIN_REACTIVATE_PROJECT;
    payload: {
        id: string;
    };
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
    | AdminDeactivateTeamMemberAction
    | AdminReactivateTeamMemberAction
    | AdminUpdateTeamMemberAction
    | AdminAddProjectAction
    | AdminPopulateProjectsAction
    | AdminArchiveProjectAction
    | AdminRemoveProjectAction
    | AdminReactivateProjectAction;
