import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ expenses }) {
    const renderExpenses = expenses.map((expense) => {
        return (
            <ExpenseItem
                key={expense.title}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        );
    });

    return <div className="expenses">{renderExpenses}</div>;
}

export default Expenses;
