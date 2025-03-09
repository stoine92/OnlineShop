import css from "./Price.module.scss";

interface PriceProps {
    label?: string; 
    price: number;
}

const Price = ({ label, price }: PriceProps) => {

    const formattedPrice = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,

    }).format(price);


    return (
        <div className={css['price']}>
            {label ? <span className={css['price-label']}>{label}</span> : null}
            <span className={css['price-value']}>{formattedPrice}</span>
            <span className={css['price-tax']}>Including Tax</span>
        </div>
    );
};

export default Price;