import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Filters from "../../components/Filters/Filters";
import useCategoryFilters from "./useCategoryFilters";
import usePriceFilters from "./usePriceFilters";
import { ProductProps } from "../../context/ContextTypes";


const useFilters = () => {
    const { state, dispatch } = useContext(CartContext);

    const { products, filters } = state;

    const categoryFulters = useCategoryFilters();
    const priceFilters = usePriceFilters();

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
        filters.push(priceFilters({ name: "Price", group: "price", products }));
        

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