import { createContext, useReducer, ReactNode, useEffect } from "react";
import { initialState as defaultInitialState, reducer } from "./CartReducer";
import { StateType, ActionType } from "./ContextTypes";

interface StateContextType {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
};

const defaultVal: StateContextType = {
    state: defaultInitialState,
    dispatch: () => {}
}

export const CartContext = createContext<StateContextType>(defaultVal);

export const ContextProvider = ({ children }: { children: ReactNode }) => {

    const storedState = sessionStorage.getItem("cartState");
    const unpackedState = JSON.parse(storedState);
    const initialState = storedState ? unpackedState : defaultInitialState;

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        sessionStorage.setItem("cartState", JSON.stringify(state));
    }, [state]);

    return (
        <CartContext.Provider value={{ 
                state, 
                dispatch 
            }}>
            {children}
        </CartContext.Provider>
    );
};