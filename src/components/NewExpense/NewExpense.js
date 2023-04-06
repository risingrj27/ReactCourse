import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseDataSavehandler = (enteredExpenseData) => {
    const expenseDatasave = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.newExpenseDataSave(expenseDatasave);
  };
  return (
    <>
      <div className="new-expense">
        <ExpenseForm newExpenseDataSave={expenseDataSavehandler} />
      </div>
    </>
  );
};

export default NewExpense;
