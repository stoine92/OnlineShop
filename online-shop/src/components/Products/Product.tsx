import { Products } from "../../context/ContextTypes";
import Image from "../Image/Image";
import Rating from "../Rating/Rating";
import Price from "../Price/Price";
import css from "./Product.module.scss";

const Product = ({ title, price, description, category, image, rating }: Products) => {
    return (
        <div className={css['product']}>
            <Image img={image} alt={title} />
            <div className={css['product_title']}>
                <span className={css['product_title-text']}>{title}</span>
                <span className={css['product_title-category']}>{category}</span>
            </div>
            <span>{description}</span>
            <Rating rating={rating} />
            <Price label="Total" price={price} />
        </div>
    )
}

export default Product;