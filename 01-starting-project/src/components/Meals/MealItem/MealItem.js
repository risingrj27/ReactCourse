import React,{useContext} from "react";
import classes from "./MealItem.module.css";
import MealitemForm from "./MealitemForm";
import CartContext from "../../../Store/cartcontext";

const MealItem = (props) => {
  const cartCTX = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCTX.addItem({
      id: props.id,
      name : props.name,
      amount: amount,
      price :props.price
    });
  }
  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.discription}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealitemForm  onAddToCart={addToCartHandler}  id={props.id}/>
        </div>
      </li>
    </>
  );
};

export default MealItem;
