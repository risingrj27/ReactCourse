import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
function Expenses(props){
return (
    <>
    <div className = 'expenses'>
    {props.items.map((e) => {
        return <ExpenseItem  title={e.title} amount={e.amount} date={e.date} />;
      })}
    </div>
    </>
)
}

export default Expenses;