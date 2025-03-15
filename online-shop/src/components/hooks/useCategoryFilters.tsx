function CategoryFilter ({  }) {

    return (
        <>
        </>
    )
}

export default function useCategoryFilters () {

    const callback = ({ filter, prducts }) => {

        return []
    }

    function init ({ products }){
        if(products) return [];


        return [];
    };

    const filter = ({ name, group, products }) => {
        return {
            name,
            group,
            Component: CategoryFilter,
            options: init({ products }).
            isActive: 0,
        }
    }

    return filter;
}