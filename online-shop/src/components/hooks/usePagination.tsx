import { useState, useMemo } from "react";
import { Products } from "../../context/ContextTypes";


const usePagination = (items: Products[], itemsPerPage: number = 10) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = items.length;

    const totalPages = useMemo(() => Math.ceil(items.length / itemsPerPage), [items, itemsPerPage]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentPageItems = useMemo(() => items.slice(startIndex, endIndex), [items, startIndex, endIndex]);

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToNextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage((prev) => prev + 1);
        }
    };

    const goToPrevPage = () => {
        if(currentPage > 1) {
            setCurrentPage((prev) => prev - 1)
        }
    };
    
    const goToLastPage = () => {
        setCurrentPage(totalPages);
    }

    return {
        currentPageItems,
        currentPage,
        totalPages,
        goToFirstPage,
        goToNextPage,
        goToPrevPage,
        goToLastPage,
        totalItems, 
    }
}

export default usePagination;