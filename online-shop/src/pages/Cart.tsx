import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Section from "../components/Layout/Section";
import CartProduct from "../components/Products/CartProduct";
import { ProductProps } from "../context/ContextTypes";

function Cart () {

    const { state, dispatch } = useContext(CartContext);
    const { cart } = state;
    
    const onIncrement = (product) => {
        dispatch({
            type: "ADD_PRODUCT",
            product
        })
    }

    const onDecrement = (product) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            product
        })
    }

    return (
        <Section>
            <Section.Main title={cart.length > 0 ? "Selected Items" : "No Items Selected"}>
                {cart?.map((product) => (
                    <CartProduct key={product.id} product={product} onIncrement={() => onIncrement(product)} onDecrement={() => onDecrement(product)}/>
                ))}
            </Section.Main>
        </Section>
    )
}
export default Cart;