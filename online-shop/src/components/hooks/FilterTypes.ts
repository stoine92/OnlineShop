interface FilterOption {
    description: string;
    value: string;
    selected?: boolean;
}

export interface CategoryFilterProps {
    name: string;
    options: FilterOption[] | [];
}

export interface FilterProps {
    name: string;
    group: string;
    products: Products[];
}

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
}

export interface FilterType {
    name: string;
    group: string;
    options: FilterOption[];
    isActive?: boolean;
    callback: ({ products, filter }: { products: Products[], filter: FilterType }) => Products[];
}

export interface CallbackProps {
    filter: FilterType;
    products: Products[];
}