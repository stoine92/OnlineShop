import { StateType, ActionType, Products } from "./ContextTypes";

export const initialState: StateType = { 
    products: [],
    filters: [],
    cart: [],
    itemsCount: 0,
    totalPrice: 0,
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

        case "DECREMENT":
            return { ...state };
        default:
            return state;
    }
};


const getTotalItemsCount = (products: Products[]): number => {
    return products.reduce((acc, curr) => acc + (curr.price || 0), 0);
}