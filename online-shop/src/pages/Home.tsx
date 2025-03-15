import { useContext } from "react";
import { CartContext } from "../context/CartContext"
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../lib/fetchProducs";
import { Products } from "../context/ContextTypes";

//Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Layout/Section";
import Product from "../components/Products/Product";
import usePagination from "../components/hooks/usePagination";
import PaginationButtons from "../components/Buttons/Pagination";

function Home () {

    const { state, dispatch } = useContext(CartContext);

    const { status } = useQuery({
        queryKey: ["products"],
        queryFn: ({ signal }) => fetchProducts({ signal })
        .then((data) => {
            dispatch({
                type: "GET_PRODUCTS",
                products: data,
            })
            return data;
        }),
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
    });
    
    const { currentPageItems, currentPage, totalPages, totalItems, goToFirstPage, goToNextPage, goToPrevPage, goToLastPage } = usePagination(state.products);

    const onProductSelect = (product: Products) => {
        dispatch({
            type: "ADD_PRODUCT",
            product
        })
    }

    if(status === "pending") return <div>Loading...</div>

    return (
        <Layout>
            <Section>
                <Section.Aside title="Filters">
                    <span>Hello</span>
                </Section.Aside>
                <Section.Main title="Our Selection" results={totalItems}>
                    <Section.Cards>
                        {currentPageItems.map((product) => (
                            <Product key={product.id} product={product} onSelect={onProductSelect} />
                        ))}
                    </Section.Cards>
                    <PaginationButtons goToFirstPage={goToFirstPage} goToNextPage={goToNextPage} goToPrevPage={goToPrevPage} goToLastPage={goToLastPage} currentPage={currentPage} totalPages={totalPages} />
                </Section.Main>
                
            </Section>
        </Layout>
    );
};

export default Home;