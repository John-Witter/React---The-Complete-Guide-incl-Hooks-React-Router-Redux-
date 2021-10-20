import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
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

    return <Card className="expenses">{renderExpenses}</Card>;
}

export default Expenses;
