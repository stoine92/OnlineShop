import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Checkbox from "../Control/Checkbox";

import { CategoryFilterProps, FilterProps, Products, CallbackProps } from "./FilterTypes";
import { FilterOption } from "../../context/ContextTypes";


function CategoryFilter ({ name, options }: CategoryFilterProps) {
    const { dispatch } = useContext(CartContext);

    const toggleFilter = (item: FilterOption) => {
        const newOptions = [...options];
        const index = newOptions.findIndex((i) => i.value === item.value);
        const newItem = Object.assign({}, {...item, selected: !item.selected});
        newOptions[index] = newItem;

        dispatch({
            type: "FILTER_CHANGE",
            name,
            options: newOptions,
            isActive: 1,

        })
    }

    return (
       <Checkbox options={options} onChange={toggleFilter}/>
    )
}

export default function useCategoryFilters () {

    const callback = ({ filter, products }: CallbackProps) => {
        if(!products) return [];
        
        if(filter.options.length < 2) return products;

        const options = filter.options.filter((option) => option.selected);

        const values = options.map((option) => option.value);

        
        const filteredProducts = products.filter((product) => {
            return values.includes(product.category);
        });
        
        return filteredProducts;
    }

    function init ({ products }: { products: Products[] }) {
        if(!products) return [];

        let options: FilterOption[] = [];

        const categories = products.map((product: Products) => product.category);
        const uniqueCategories = [...new Set(categories)];

        if(uniqueCategories.length > 0){
            uniqueCategories.map((category) => {
                options.push({
                    description: category,
                    value: category, 
                    selected: false,
                })
            })
        }

        return options.toSorted((a, b) => a.description.localeCompare(b.description));
    };

    const filter = ({ name, group, products }: FilterProps) => {
        return {
            name,
            group,
            Component: CategoryFilter,
            options: init({ products }),
            isActive: 0,
            callback: callback,
        }
    }

    return filter;
}