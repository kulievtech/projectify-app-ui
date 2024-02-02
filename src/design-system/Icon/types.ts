export type IconName =
    | "tasks"
    | "support"
    | "stories"
    | "settings"
    | "projects"
    | "members"
    | "log-out"
    | "chevron-right"
    | "flag"
    | "arrow-left"
    | "password-eye"
    | "password-eye-off"
    | "check"
    | "three-dots"
    | "edit"
    | "delete";

export type IconProps = {
    iconName: IconName;
    className?: string;
    onClick?: () => void;
};
