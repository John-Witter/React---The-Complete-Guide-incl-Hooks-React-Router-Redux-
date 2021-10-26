import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    // const [filteredExpenses, setFilteredExpenses] = useState(props.items);

    const filterYearHandler = (year) => {
        setFilteredYear(year);
        console.log("year:", year);

        // filter props.items (all expenses)
        // so item.date.getFullYear = year (getFullYear() returns a Number)
        // (using filteredYear causes error b/c setState is async)

        // setFilteredExpenses(
        //     props.items.filter((item) => item.date.getFullYear() === +year)
        // );
    };

    // reason done here: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/practice/1290032/instructor-solution#questions/14649844
    // look for the comment by MLR that you upvoted
    const filteredExpenses = props.items.filter(
        (item) => item.date.getFullYear() === +filteredYear
    );

    let expensesContent = <p>No Expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onSelectYear={filterYearHandler}
                />
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;
