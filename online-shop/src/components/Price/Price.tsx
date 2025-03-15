import { formatPrice } from "../../utils/formatPrice";
import css from "./Price.module.scss";

interface PriceProps {
    label?: string; 
    price: number;
}

const Price = ({ label, price }: PriceProps) => {
    return (
        <div className={css['price']}>
            {label ? <span className={css['price-label']}>{label}</span> : null}
            <span className={css['price-value']}>{formatPrice(price)}</span>
            <span className={css['price-tax']}>Including Tax</span>
        </div>
    );
};

export default Price;