import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState("2020");

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

    const filterYearHandler = (year) => {
        setFilteredYear(year);
        console.log("year:", year);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onSelectYear={filterYearHandler}
                />
                {renderExpenses}
            </Card>
        </div>
    );
}

export default Expenses;
