import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses }) {
    const [selectedYear, setSelectedYear] = useState("");

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

    const handleYearSelect = (year) => {
        setSelectedYear(year)
        console.log("year:", year);
    };

    return (
        <div>
            <ExpensesFilter onSelectYear={handleYearSelect} />
            <Card className="expenses">{renderExpenses}</Card>
        </div>
    );
}

export default Expenses;
