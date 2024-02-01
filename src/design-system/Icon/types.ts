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
    | "check"
    | "arrow-left"
    | "password-eye"
    | "password-eye-off";

export type IconProps = {
    iconName: IconName;
    className?: string;
    onClick?: () => void;
};
