import { StateType, ActionType, Products, FilterType } from "./ContextTypes";

export const initialState: StateType = { 
    products: [],
    filters: [],
    cart: [],
    filteredResults: [],
    itemsCount: 0,
    totalPrice: 0,
    page: 1,
};

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "GET_PRODUCTS":
            const { products, filters } = action;

            return { 
                ...state,
                products,
                filteredResults: filterProducts(products, filters) || [],
                filters,
                page: 1,
            };

        case "ADD_PRODUCT":{
            const { product } = action;
            const existingProduct = state.cart.find((p) => p.id === product.id);

            let updatedCart;
            let updatedTotalPrice = state.totalPrice;

            if(!existingProduct){
                updatedCart = [...state.cart, { ...product, count: 1, totalPrice: product.price}];
            } else {

                updatedCart = state.cart.map((p) => {
                    return p.id === product.id ? { ...p, count: p.count + 1, totalPrice: (p.count + 1) * p.price} : p
                });
            }
            updatedTotalPrice += product.price;

            const updatedItemsCount = updatedCart.reduce((total, p) => total + p.count, 0);

            return {
                ...state,
                cart: updatedCart,
                totalPrice: updatedTotalPrice,
                itemsCount: updatedItemsCount,
            }
        }

        case "REMOVE_PRODUCT": {
            const { product } = action;
            const existingProduct = state.cart.find((p) => p.id === product.id);

            if (!existingProduct) return state;

            let updatedCart;
            let updatedTotalPrice = state.totalPrice;

            if (existingProduct.count === 1) {
                updatedCart = state.cart.filter((p) => p.id !== product.id);
            } else {
                updatedCart = state.cart.map((p) => {
                    return p.id === product.id ? { ...p, count: p.count - 1, totalPrice: p.totalPrice - product.price} : p;
                });
            }
            updatedTotalPrice -= existingProduct.price;

            const updatedItemsCount = updatedCart.reduce((total, p) => total + p.count, 0);

            return {
                ...state,
                cart: updatedCart,
                totalPrice: updatedTotalPrice,
                itemsCount: updatedItemsCount,
            };
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
                filteredResults,
                page: 1,
            }

        }

        case "SET_PAGE": { 
            return {
                ...state,
                page: action.page,
            }
        }

        case "RESET_FILTERS": {
            return {
                ...state,
                filters: action.filters ?? [],
                filteredResults: filterProducts(state.products, action.filters),
                page: 1,
            }
        }
        
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