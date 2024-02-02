import { IconName } from "../Icon";

export interface MenuItem {
    label: string;
    iconName?: IconName;
    value: string;
    variant?: "primary" | "danger";
}

export interface MenuProps {
    items: MenuItem[];
    onSelect: (value: string) => void;
    customTrigger?: React.ReactNode;
    className?: string;
}
