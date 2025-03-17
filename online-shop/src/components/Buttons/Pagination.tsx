import { useCallback } from "react";
import PaginationButton from "./PaginationButton";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import css from "./Pagination.module.scss";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {

    const handleFirstPage =  useCallback(() => { 
        onPageChange(1);
        window.scrollTo(0, 0);
    }, [onPageChange]);

    const handleLastPage =  useCallback(() => { 
        onPageChange(totalPages);
        window.scrollTo(0, 0);
    }, [onPageChange, totalPages]);

    const handleNextPage =  useCallback(() => { 
        if(currentPage < totalPages){
            onPageChange(currentPage + 1);
            window.scrollTo(0, 0);
        }
    }, [onPageChange, currentPage, totalPages]);

    const handlePrevPage =  useCallback(() => {
        if(currentPage > 1) {
            onPageChange(currentPage - 1);
            window.scrollTo(0, 0);
        }
    }, [currentPage, onPageChange]);

    if(currentPage < 1){
        onPageChange(1);
    }

    if(currentPage > totalPages && totalPages > 0){
        onPageChange(totalPages);
    }

    if(totalPages <=0){
        return;
    }

    const forwardDisabled: boolean = currentPage === totalPages;
    const prevDisabled: boolean = currentPage === 1;

    return(
        <div className={css['pagination']}>
            <div className={css['pagination_buttons']}>
                <PaginationButton onClick={handleFirstPage} icon={KeyboardDoubleArrowLeftIcon} disabled={prevDisabled} />
                <PaginationButton onClick={handlePrevPage} icon={KeyboardArrowLeftIcon} disabled={prevDisabled} />
                <PaginationButton onClick={handleNextPage} icon={KeyboardArrowRightIcon} disabled={forwardDisabled} />
                <PaginationButton onClick={handleLastPage} icon={KeyboardDoubleArrowRightIcon} disabled={forwardDisabled} />
            </div>
            <span className={css['pagination-paging']}>{`${currentPage} - ${totalPages}`}</span>
        </div>
    )
}

export default Pagination;