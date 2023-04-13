import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensedList = (props) => {
  if (props.items.length == 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }
  return (
    <>
      <ul className="expenses-list">
        {props.items.map((e) => {
          return (
            <ExpenseItem
              key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ExpensedList;
