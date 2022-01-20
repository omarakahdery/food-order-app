import React from "react";
import headerFoodImg from "../../assets/header-food-img.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Healthy Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerFoodImg} alt="A table full of delicious healthy food" />
      </div>
    </>
  );
};

export default Header;
