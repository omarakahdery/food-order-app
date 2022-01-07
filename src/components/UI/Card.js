import classes from "./Card.module.css";
const Cart = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Cart;
