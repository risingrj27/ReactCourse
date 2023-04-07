import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
  const [title, setTitle] = useState(props.title);
  const titleHandler = () => {
    setTitle("updated");
  };

  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={titleHandler}>Change Title</button>
      </div>
    </>
  );
}

export default ExpenseItem;
