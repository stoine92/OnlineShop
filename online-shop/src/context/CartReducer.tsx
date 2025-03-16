import { StateType, ActionType, Products, FilterType } from "./ContextTypes";

export const initialState: StateType = { 
    products: [],
    filters: [],
    cart: [],
    filteredResults: [],
    itemsCount: 0,
    totalPrice: 0,
};

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "GET_PRODUCTS":
            const { products, filters } = action;

            return { 
                ...state,
                products,
                filteredResults: filterProducts(products, filters) || [],
                filters
            };

        case "ADD_PRODUCT":{
            const { product } = action;
            const existingProduct = state.cart.find((p) => p.id === product.id);

            let updatedCart;
            let updatedTotalPrice = state.totalPrice;

            if(!existingProduct){
                updatedCart = [...state.cart, { ...product, count: 1}];
            } else {
                updatedCart = state.cart.map((p) => {
                    return p.id === product.id ? { ...p, count: p.count + 1} : p
                });
            }
            updatedTotalPrice += product.price;

            return {
                ...state,
                cart: updatedCart,
                totalPrice: updatedTotalPrice,
            }
        }

        case "FILTER_CHANGE": {
            const filters = [...state.filters];
            const index = filters.findIndex((f) => f.name === action.name);
            const newFilter = Object.assign({}, filters[index]);

            if(action.options){
                newFilter.options = action.options;
            }

            if(action.hasOwnProperty("isActive")){
                newFilter.isActive = action.isActive;
            }

            filters[index] = newFilter;

            const filteredResults = filterProducts(state.products, filters);

            return {
                ...state,
                filters,
                filteredResults
            }

        }

        case "RESET_FILTERS": {
            return {
                ...state,
                filters: action.filters ?? [],
                filteredResults: filterProducts(state.products, action.filters)
            }
        }

        case "DECREMENT":
            return { ...state };
        default:
            return state;
    }
};

const filterProducts = (products: Products[], filters: FilterType[]) => {
    const activeFilters = filters.filter(filter => filter.isActive && filter.options.some(option => option.selected));
    if (activeFilters.length === 0) {
        return products;
    }

    return activeFilters.reduce((filteredProducts, filter) => {
        return filter.callback({ products: filteredProducts, filter });
    }, products);
}


const getTotalItemsCount = (products: Products[]): number => {
    return products.reduce((acc, curr) => acc + (curr.price || 0), 0);
}