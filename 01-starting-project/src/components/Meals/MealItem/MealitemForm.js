import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input";

const MealitemForm = (props) => {
  return (
    <>
      <form className={classes.form}>
        {/* <input></input> */}
        <Input  label="Quantity"  input={{
          id :'Amount_'+ props.id,
          type:'number',
          min: '1',
          max: '5',
          step : '1',
          defaultValue: '1'
        }} />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          + Add
        </button>
      </form>
    </>
  );
};

export default MealitemForm;
