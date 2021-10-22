// used to extract date logic from ExpenseItem

import './ExpenseDate.css'

function ExpenseDate(props) {
    //  const expenseDate = new Date(2021, 2, 28); //2 = March, month[0] = January
    //  const expenseTitle = "Car Insurance";
    //  const expenseAmount = 294.67;
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;
