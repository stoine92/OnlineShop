import { createContext, useReducer, ReactNode } from "react";
import { initialState, reducer } from "./CartReducer";
import { StateType, ActionType } from "./ContextTypes";


interface StateContextType {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
};

const defaultVal: StateContextType = {
    state: initialState,
    dispatch: () => {}
}

export const CartContext = createContext<StateContextType>(defaultVal);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ 
                state, 
                dispatch 
            }}>
            {children}
        </CartContext.Provider>
    );
};