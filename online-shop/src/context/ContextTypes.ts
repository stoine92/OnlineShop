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

export interface FilterOption {
    description: string;
    value: string;
    selected?: boolean;
}

export interface FilterType {
    name: string;
    group: string;
    options: FilterOption[] | [];
    isActive?: number | boolean;
    callback: ({ products, filter }: { products: Products[], filter: FilterType }) => Products[];
}

export interface StateType {
    products: Products[];
    filters: FilterType[];
    cart: Products[];
    filteredResults: Products[];
    itemsCount: number;
    totalPrice: number;
};

export interface GetProductsAction {
    type: "GET_PRODUCTS";
    products: Products[];
    // filters: FilterType[];
    filters: any;
}

export interface AddProduct {
    type: "ADD_PRODUCT";
    product: Products;
}

export interface DecrementAction {
    type: "DECREMENT";
}

export interface FilterChangeAction {
    type: "FILTER_CHANGE";
    name: string;
    options: FilterOption[] | [];
    isActive?: number;
}

export interface ResetFiltersAction {
    type: "RESET_FILTERS";
    // filters: FilterType[];
    filters: any;
}

export type ActionType = GetProductsAction | DecrementAction | AddProduct | FilterChangeAction | ResetFiltersAction;