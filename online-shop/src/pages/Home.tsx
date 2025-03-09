import { useContext } from "react";
import { CartContext } from "../context/CartContext"
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../lib/fetchProducs";
//Components
import Layout from "../components/Layout/Layout";
import Section from "../components/Layout/Section";

function Home () {

    const { state, dispatch } = useContext(CartContext);

    const { data: products, status } = useQuery({
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

    console.log(state);

    if(status === "pending") return <div>Loading...</div>


    return (
        <Layout>
            <Section>
                <Section.Aside title="Filters">
                    <span>Hello</span>
                </Section.Aside>
                <Section.Main title="Our Selection">
                    <span>Hello</span>
                </Section.Main>
                
            </Section>
        </Layout>
    );
};

export default Home;