import { StateType, ActionType } from "./ContextTypes";

export const initialState: StateType = { 
    products: [],
    filters: [],
    cart: [],
    itemsCount: 0,
};

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "GET_PRODUCTS":
            const { products } = action;

            return { 
                ...state,
                products
            };

        case "ADD_PRODUCT":{

            const { product } = action;
            const existingProduct = state.cart.find((p) => p.id === product.id);

            let updatedProducts = [];

            if(!existingProduct){
                updatedProducts.push({ ...product, count : 1});
            } else {
                existingProduct.count++;
            }


            return {
                ...state,
                cart: [...state.cart, ...updatedProducts],
                itemsCount: getTotalItemsCount([...state.cart, ...updatedProducts]),
            }
        }

        case "DECREMENT":
            return { ...state };
        default:
            return state;
    }
};


const getTotalItemsCount = (products) => {
    return products.reduce((acc, curr) => acc + curr, 0);
}