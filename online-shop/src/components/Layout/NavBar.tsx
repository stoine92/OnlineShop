import { FC, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router";
import ButtonLink from "../Buttons/ButtonLink";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import css from "./NavBar.module.scss";

const NavBar: FC = () => {

  const { state } = useContext(CartContext);
  const { totalPrice } = state;

  const navigate = useNavigate();

  return (
    <div className={css['nav']}>
      <div className={css['nav_pages']}>
          <ButtonLink onClick={() => navigate("/")}>Home</ButtonLink>
          <ButtonLink onClick={() => console.log("Missing functionality")}>Category</ButtonLink>
          <ButtonLink onClick={() => console.log("Missing functionality")}>About</ButtonLink>
      </div>
      <ButtonLink onClick={() => navigate("/cart")}>
        <span className={css['nav-total']}>{formatPrice(totalPrice)}</span>
        <ShoppingCartOutlinedIcon fontSize="inherit" />
      </ButtonLink>
    </div>
  );
};

export default NavBar;
