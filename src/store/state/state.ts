import {
    AdminUser,
    Project,
    Task,
    TeamMember,
    TeamMemberUser
} from "../../types";

export type UserState = AdminUser | TeamMemberUser | null;
export type TaskState = { [taskId: string]: Task };
export type TeamMemberState = { [teamMemberId: string]: TeamMember };
export type ProjectState = Project[];
export interface GlobalState {
    user: UserState;
    adminPersonalTasks: TaskState;
    teamMemberPersonalTasks: TaskState;
    teamMembers: TeamMemberState;
    projects: ProjectState;
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: {},
    teamMembers: {},
    teamMemberPersonalTasks: {},
    projects: []
};
