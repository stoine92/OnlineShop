import { PaginationButtonProps } from "./ButtonTypes";
import css from "./Pagination.module.scss";


const PaginationButton = ({ className, icon, type = 'button', onClick, disabled = true }: PaginationButtonProps) => {

    const classes = [
        css.paginationButton,
        className,
        disabled && css["paginationButton--disabled"],
    ];

    const Icon = icon;

    return (
        <button 
            className={classes.join(" ")}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            <Icon />
        </button>
    )
}

export default PaginationButton;