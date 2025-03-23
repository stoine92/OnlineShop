import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext"
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../lib/fetchProducs";
import { Products } from "../context/ContextTypes";
import handlePagination from "../utils/handlePagination";
import useFilters from "../components/hooks/useFilters";
import useCurrentWidth from "../utils/useCurrentWidth";

//Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Layout/Section";
import Product from "../components/Products/Product";
import PaginationButtons from "../components/Buttons/Pagination";
import ButtonLink from "../components/Buttons/ButtonLink";
import HomePageSkeleton from "../components/Skeleton/HomePageSkeleton";

function Home () {

    const { state, dispatch } = useContext(CartContext);

    const { isDesktop } = useCurrentWidth();

    const { filteredResults, page } = state;

    const { Filters, initialiseFilters, filterMethods, resetFilters } = useFilters();

    const { status } = useQuery({
        queryKey: ["products"],
        queryFn: ({ signal }) => fetchProducts({ signal })
        .then((data) => {
            dispatch({
                type: "GET_PRODUCTS",
                products: data,
                filters: initialiseFilters({ products: data })
            })
            return data;
        }),
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
    });
    
    const onProductSelect = (product: Products) => {
        dispatch({
            type: "ADD_PRODUCT",
            product
        })
    };

    const { results, maxPages, resultCount } = useMemo(() => {
        const resultCount = filteredResults?.length || 0;
        const maxPages = Math.ceil(resultCount / 10);
        const pagedResults = handlePagination(filteredResults, page, 10);
        return {
            results: pagedResults,
            maxPages,
            resultCount
        }
    }, [filteredResults, page]);
    
    return (
        <>
            {status === "pending" ? 
                <HomePageSkeleton />
            : 
            <Section>
                <Section.Aside title="Filters" button={<ButtonLink onClick={resetFilters} secondary>Reset</ButtonLink>}>
                    <Filters {...filterMethods} />
                </Section.Aside>
                <Section.Main title="Our Selection" results={resultCount}>
                    <Section.Cards>
                        {results.map((product) => (
                            <Product key={product.id} product={product} onSelect={onProductSelect} />
                        ))}
                    </Section.Cards>
                    <PaginationButtons 
                        currentPage={page}
                        totalPages={maxPages}
                        onPageChange={(page) => dispatch({ type: "SET_PAGE", page })}
                    />
                </Section.Main>
                
            </Section>
            }
        </>
    );
};

export default Home;