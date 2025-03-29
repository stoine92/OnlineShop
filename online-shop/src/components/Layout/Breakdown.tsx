import { formatPrice } from "../../utils/formatPrice";
import css from "./Breakdown.module.scss";

interface BreakdownProps {
    count: number;
    price: number;
}

const Breakdown = ({ count, price }: BreakdownProps) => {
    return (
        <div className={css["breakdown"]}>
            <span className={css["breakdown-title"]}>Summary</span>
            <div className={css["breakdown_summary"]}>
                <span className={css["breakdown_summary-text"]}>{`${count}x Item${count > 1 ? "s" : ""}`}</span>
                <div className={css["breakdown_price"]}>
                    <span className={css["breakdown_price-text"]}>Total</span>
                    <span className={css["breakdown_price-amount"]}>{formatPrice(price)}</span>
                </div>
            </div>
        </div>
    )
}

export default Breakdown;