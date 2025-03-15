import { useContext } from "react";
import { CartContext } from "@/context/CartContext";


const useFilters = () => {
    const { state, dispatch } = useContext(CartContext);

    const resetFilters = () => {
        dispatch({
            type: 'RESET_FILTERS',
            filters: initialiseFilters({ cart, reset: true })
        })
    }

    const initialiseFilters = ({ hotels }) => {
        const filters = [];

        return filters;
    }

    return {
        resetFilters,
        Filters,
        
    }
}

export default useFilters;