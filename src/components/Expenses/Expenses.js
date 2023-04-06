import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import ExpensedList from "./ExpensedList";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenseFilter = props.items.filter(
    (expense) => expense.date.getFullYear().toString() == filteredYear
  );
  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {expenseFilter}/>
        <ExpensedList items={expenseFilter} />
      </div>
    </>
  );
}

export default Expenses;
