import { ComponentType, ReactNode } from "react";

export interface ButtonProps {
    className?: string;
    children: ReactNode | string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    secondary?: boolean;
    small?: boolean;
}

export interface ButtonLinkProps extends ButtonProps {}

export interface PaginationButtonProps {
    className?: string;
    icon: ComponentType;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
}