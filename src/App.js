import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
  return (
    <>
      <Expenses items={expenses} />
    </>
  );
}

export default App;
