import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 294.76,
    date: new Date(2021, 2, 28),
  },
  { id: 2, title: "Lunch", amount: 294.76, date: new Date(2021, 2, 28) },
  {
    id: 3,
    title: "Bike Repair",
    amount: 294.76,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: "Laptop Repair",
    amount: 294.76,
    date: new Date(2021, 2, 28),
  },
  { id: 5, title: "Cloths", amount: 294.76, date: new Date(2021, 2, 28) },
  { id: 6, title: "New Iphone", amount: 294.76, date: new Date(2021, 2, 28) },
  { id: 7, title: "New Car", amount: 294.76, date: new Date(2021, 2, 28) },
  {
    id: 8,
    title: "Health Insurance",
    amount: 294.76,
    date: new Date(2021, 2, 28),
  },
];

function App() {
  const [expenseData, setExpenseData] = useState(DUMMY_DATA)

  const addNewExpenseData = (expense) => {
    setExpenseData(prevExpense => {
      return [expense, ...prevExpense]
    })
  };
  return (
    <>
      <NewExpense newExpenseDataSave={addNewExpenseData} />
      <Expenses items={expenseData} />
    </>
  );
}

export default App;
