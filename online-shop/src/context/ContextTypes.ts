export interface ProductProps {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
};

export interface Products {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    count: number;
}

export interface StateType {
    products: Products[];
    filters: number[];
    cart: Products[];
    itemsCount: number;
    totalPrice: number;
};


export interface GetProductsAction {
    type: "GET_PRODUCTS";
    products: Products[];
}

export interface AddProduct {
    type: "ADD_PRODUCT";
    product: Products;
}

export interface DecrementAction {
    type: "DECREMENT";
}

export type ActionType = GetProductsAction | DecrementAction | AddProduct;