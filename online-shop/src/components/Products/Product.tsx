import { Products } from "../../context/ContextTypes";
import Image from "../Image/Image";
import Rating from "../Rating/Rating";
import Price from "../Price/Price";
import Button from "../Buttons/Button";
import ButtonLink from "../Buttons/ButtonLink";
import Dialog from "../Dialog/Dialog";
import css from "./Product.module.scss";

const Product = ({ product, onSelect }: Products) => {

    const { title, price, description, category, image, rating } = product;
    return (
        <div className={css['product']}>
            <Image img={image} alt={title} />
            <div className={css['product_title']}>
                <span className={css['product_title-text']}>{title}</span>
                <span className={css['product_title-category']}>{category}</span>
            </div>
            <Rating rating={rating} />
            <Dialog title="Product Description" trigger={<ButtonLink secondary>Read More</ButtonLink>}>
                <span>{description}</span>
            </Dialog>
            <Price label="Total" price={price} />
            <div className={css['product_button']}>
                <Button onClick={() => onSelect(product)}>Add To Cart</Button>
            </div>
        </div>
    )
}

export default Product;