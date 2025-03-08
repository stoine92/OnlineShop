import css from "./ButtonLink.module.scss";

interface ButtonLinkProps {
    className?: string;
    children: string;
    type?: "button" | "submit" | "reset";
    onClick: () => void;
    disabled?: boolean;
    secondary?: boolean;
    small?: boolean;
}

const ButtonLink = ({ className, children, type = 'button', onClick, disabled, secondary, small }: ButtonLinkProps) => {

    const classes = [
        css.buttonLink,
        className
    ];

    if(secondary) { classes.push("--secondary") }
    if(small) { classes.push("--small") }

    return (
        <button 
            className={classes.join(" ")}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default ButtonLink;