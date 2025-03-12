import { ButtonLinkProps } from "./ButtonTypes";
import css from "./ButtonLink.module.scss";


const ButtonLink = ({ className, children, type = 'button', onClick, disabled, secondary, small }: ButtonLinkProps) => {

    const classes = [
        css.buttonLink,
        className,
        secondary && css["buttonLink--secondary"],
        small && css["buttonLink--small"],
    ];

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