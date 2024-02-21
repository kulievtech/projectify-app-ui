export enum UserRole {
    admin = "admin",
    teamMember = "teamMember"
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    id: string;
    role: UserRole;
    imageUrl?: string;
    preferredFirstName?: string;
}

export interface AdminUser extends User {
    preferredFirstName: string;
    company: {
        name: string;
        position: string;
    } | null;
}

export interface TeamMemberUser extends User {
    position: string;
    status: string;
    adminId: string;
}
export type TaskStatus = "TODO" | "INPROGRESS" | "DONE";
export interface Task {
    id: string;
    title: string;
    description: string;
    due: Date;
    status: TaskStatus;
}

export type TeamMemberStatus = "ACTIVE" | "INACTIVE" | "DEACTIVATED";

export interface TeamMember {
    id: string;
    status: TeamMemberStatus;
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    joinDate: string;
}

export type ProjectStatus = "ACTIVE" | "ARCHIVED" | "COMPLETED";

export interface Project {
    id: string;
    status: ProjectStatus;
    name: string;
    description: string;
    dueDate: string;
}

export type GetMeResponseType = {
    data: TeamMemberUser;
};
