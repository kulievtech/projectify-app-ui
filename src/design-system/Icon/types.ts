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
    | "delete"
    | "chevron-down"
    | "calendar"
    | "check-sharp"
    | "minus-sharp"
    | "minus"
    | "info-in-circle"
    | "check-in-circle"
    | "info-in-circle-sharp"
    | "check-in-circle-sharp";

export type IconProps = {
    iconName: IconName;
    className?: string;
    onClick?: () => void;
};
