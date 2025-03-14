export interface Products {
    product: {
        id: number;
        category: string;
        description: string;
        image: string;
        price: number;
        rating: {
            rate: number;
            count: number;
    };
    title: string;}
    onSelect: () => void;
}

export interface StateType {
    products: Products[];
    filters: number[]
};


export interface GetProductsAction {
    type: "GET_PRODUCTS";
    products: Products[];
}

export interface DecrementAction {
    type: "DECREMENT";
}

export type ActionType = GetProductsAction | DecrementAction;