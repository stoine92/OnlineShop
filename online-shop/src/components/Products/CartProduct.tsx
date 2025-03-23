import { FC } from 'react';
import { formatPrice } from '../../utils/formatPrice';
import css from './CartProduct.module.scss';

interface CartProductProps {
    product: {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        };
        count: number;
    };
    onIncrement: (id: number) => void;
    onDecrement: (id: number) => void;
}

const CartProduct: FC<CartProductProps> = ({ product, onIncrement, onDecrement }) => {


    return (
        <div className={css['cartProduct']}>
            <img src={product.image} alt={product.title} className={css['cartProduct-image']} />
            <div className={css['cartProduct_details']}>
                <span className={css['cartProduct_details-title']}>{product.title}</span>
                <span className={css['cartProduct_details-description']}>{product.description}</span>
                <div className={css['cartProduct_priceQuantity']}>
                    <span className={css['cartProduct_priceQuantity-price']}>{formatPrice(product.totalPrice)}</span>
                    <div className={css['cartProduct_quantity']}>
                        <button onClick={() => onDecrement(product.id)} className={css['cartProduct_quantity-button']}>-</button>
                        <span className={css['cartProduct_quantity-count']}>{product.count}</span>
                        <button onClick={() => onIncrement(product.id)} className={css['cartProduct_quantity-button']}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;