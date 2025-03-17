import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FilterProps, CallbackProps } from "./FilterTypes";
import { FilterOption } from "../../context/ContextTypes";
import SelectInput from "../Form/SelectInput";

interface PriceFilterProps {
    name: string;
    options: FilterOption[];
}

function PriceFilter({ name, options }: PriceFilterProps) {
    const { dispatch } = useContext(CartContext);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newOptions = options.map(option => ({
            ...option,
            selected: option.value === event.target.value
        }));

        const isActive = event.target.value === "descending";
        dispatch({
            type: "FILTER_CHANGE",
            name,
            options: newOptions,
            isActive: isActive ? 1 : 0,
        });
    };

    return (
        <SelectInput options={options} value={options.find(option => option.selected)?.value || ""} onChange={handleChange} />
    );
}

export default function usePriceFilters() {
    const callback = ({ filter, products }: CallbackProps) => {
        if (!products) return [];

        const selectedOption = filter.options.find(option => option.selected);
        if (!selectedOption) return products;

        const sortedProducts = [...products].sort((a, b) => {
            if (selectedOption.value === "ascending") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        return sortedProducts;
    };

    function init() {
        const options: FilterOption[] = [
            { description: "Ascending", value: "ascending", selected: false },
            { description: "Descending", value: "descending", selected: false }
        ];

        return options;
    }

    const filter = ({ name, group, products }: FilterProps) => {
        return {
            name,
            group,
            Component: PriceFilter,
            options: init(),
            isActive: 0,
            callback: callback,
        };
    };

    return filter;
}