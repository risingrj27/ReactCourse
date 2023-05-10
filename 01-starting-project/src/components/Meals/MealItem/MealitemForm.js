import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input";

const MealitemForm = (props) => {
  const [amountIsVaid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        {/* <input></input> */}
        <Input
          ref={amountInputRef}
          label="Quantity"
          input={{
            id: "Amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!amountIsVaid && <p>Please enter a valid amount</p>}
      </form>
    </>
  );
};

export default MealitemForm;
