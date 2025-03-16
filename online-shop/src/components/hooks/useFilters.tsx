import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Filters from "../../components/Filters/Filters";
import useCategoryFilters from "./useCategoryFilters";
import { ProductProps } from "../../context/ContextTypes";


const useFilters = () => {
    const { state, dispatch } = useContext(CartContext);

    const { products, filters } = state;

    const categoryFulters = useCategoryFilters();

    const resetFilters = () => {
        dispatch({
            type: 'RESET_FILTERS',
            filters: initialiseFilters({ products })
        })
    }

    const filterMethods = {
        filters
    }

    const initialiseFilters = ({ products }: {products: ProductProps[]}) => {
        const filters = [];

        filters.push(categoryFulters({ name: "Category", group: "category", products }));

        return filters;
    }

    return {
        resetFilters,
        Filters,
        initialiseFilters,
        filterMethods,
    }
}

export default useFilters;