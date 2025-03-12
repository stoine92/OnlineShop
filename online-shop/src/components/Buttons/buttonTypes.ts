export interface ButtonProps {
    className?: string;
    children: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    secondary?: boolean;
    small?: boolean;
}

export interface ButtonLinkProps extends ButtonProps {}