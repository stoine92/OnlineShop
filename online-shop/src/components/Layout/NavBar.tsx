import { FC } from "react";
import ButtonLink from "../Buttons/ButtonLink";
import css from "./NavBar.module.scss";

const NavBar: FC = () => {
  return (
    <div className={css['nav']}>
      <div className={css['nav_pages']}>
          <ButtonLink onClick={() => console.log("Missing functionality")}>Home</ButtonLink>
          <ButtonLink onClick={() => console.log("Missing functionality")}>Category</ButtonLink>
          <ButtonLink onClick={() => console.log("Missing functionality")}>About</ButtonLink>
      </div>
      <div>
        <ButtonLink onClick={() => console.log("Missing functionality")}>Cart</ButtonLink>
      </div>
    </div>
  );
};

export default NavBar;
