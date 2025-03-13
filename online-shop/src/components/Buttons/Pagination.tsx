import PaginationButton from "./PaginationButton";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import css from "./Pagination.module.scss";

interface PaginationProps {
    goToFirstPage: () => void;
    goToPrevPage: () => void;
    goToNextPage: () => void;
    goToLastPage: () => void;
    currentPage: number;
    totalPages: number
}

const Pagination = ({ goToFirstPage, goToPrevPage, goToNextPage, goToLastPage, currentPage, totalPages }: PaginationProps) => {

    const forwardDisabled: boolean = currentPage === totalPages;
    const prevDisabled: boolean = currentPage === 1;

    return(
        <div className={css['pagination']}>
            <div className={css['pagination_buttons']}>
                <PaginationButton onClick={goToFirstPage} icon={KeyboardDoubleArrowLeftIcon} disabled={prevDisabled} />
                <PaginationButton onClick={goToPrevPage} icon={KeyboardArrowLeftIcon} disabled={prevDisabled} />
                <PaginationButton onClick={goToNextPage} icon={KeyboardArrowRightIcon} disabled={forwardDisabled} />
                <PaginationButton onClick={goToLastPage} icon={KeyboardDoubleArrowRightIcon} disabled={forwardDisabled} />
            </div>
            <span className={css['pagination-paging']}>{`${currentPage} - ${totalPages}`}</span>
        </div>
    )
}

export default Pagination;