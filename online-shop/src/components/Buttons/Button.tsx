import { ButtonProps } from "./ButtonTypes";
import css from "./Button.module.scss";


const Button = ({ className, children, type = 'button', onClick, disabled, secondary, small }: ButtonProps) => {

    const classes = [
        css.button,
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

export default Button;