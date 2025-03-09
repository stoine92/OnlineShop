import { StateType, ActionType } from "./ContextTypes";

export const initialState: StateType = { 
    products: [],
    filters: [],
};

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "GET_PRODUCTS":
            const { products } = action;

            return { 
                ...state,
                products
            };
        case "DECREMENT":
            return { ...state };
        default:
            return state;
    }
};