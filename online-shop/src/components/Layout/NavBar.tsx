import { FC, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import ButtonLink from "../Buttons/ButtonLink";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import css from "./NavBar.module.scss";

const NavBar: FC = () => {

  const { state } = useContext(CartContext);
  const { totalPrice } = state;

  return (
    <div className={css['nav']}>
      <div className={css['nav_pages']}>
          <ButtonLink onClick={() => console.log("Missing functionality")}>Home</ButtonLink>
          <ButtonLink onClick={() => console.log("Missing functionality")}>Category</ButtonLink>
          <ButtonLink onClick={() => console.log("Missing functionality")}>About</ButtonLink>
      </div>
      <ButtonLink onClick={() => console.log("Missing functionality")}>
        <span className={css['nav-total']}>{formatPrice(totalPrice)}</span>
        <ShoppingCartOutlinedIcon fontSize="inherit" />
      </ButtonLink>
    </div>
  );
};

export default NavBar;
