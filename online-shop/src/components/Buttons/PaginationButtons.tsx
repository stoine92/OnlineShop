import css from "./Pagination.module.scss";

interface PaginationButtons {
    goToFirstPage: () => void;
    goToPrevPage: () => void;
    goToNextPage: () => void;
    goToLastPage: () => void;
}

const PaginationButtons = ({ goToFirstPage, goToPrevPage, goToNextPage, goToLastPage}: PaginationButtons) => {
    return(
        <div className={css['pagination']}>
            <button onClick={goToFirstPage}>First</button>
            <button onClick={goToPrevPage}>Prev</button>
            <button onClick={goToNextPage}>Next</button>
            <button onClick={goToLastPage}>Last</button>
        </div>
    )
}

export default PaginationButtons;