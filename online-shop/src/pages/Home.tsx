import { useContext } from "react";
import { CartContext } from "../context/CartContext"
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../lib/fetchProducs";
//Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Layout/Section";
import Product from "../components/Products/Product";

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

    if(status === "pending") return <div>Loading...</div>


    return (
        <Layout>
            <Section>
                <Section.Aside title="Filters">
                    <span>Hasddasello</span>
                </Section.Aside>
                <Section.Main title="Our Selection">
                    {state.products.map((product) => (
                        <Product {...product} />
                    ))}
                </Section.Main>
                
            </Section>
        </Layout>
    );
};

export default Home;