import { FC } from "react";
import ButtonLink from "../Buttons/ButtonLink";
import css from "./NavBar.module.scss";

const NavBar: FC = () => {
  return (
    <div className={css['nav']}>
      <div className={css['nav_pages']}>
          {/* <ButtonLink>Home</ButtonLink>
          <ButtonLink>Category</ButtonLink>
          <ButtonLink>About</ButtonLink> */}
      </div>
      <div>
        <span>Items</span>
      </div>
    </div>
  );
};

export default NavBar;
