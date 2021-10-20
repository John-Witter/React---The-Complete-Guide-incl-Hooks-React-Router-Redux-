import "./ExpenseItem.css";

// display amount of expense and date

function ExpenseItem(props) {

    // const expenseDate = new Date(2021, 2, 28); //2 = March, month[0] = January
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294.67;
    const day = props.date.toLocaleString("en-US", { day: "2-digit" }); 
    const month = props.date.toLocaleString("en-US", { month: "long" }); 
    const year = props.date.getFullYear(); 
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    return (
        <div className="expense-item">
            {/* Date is an object and can't be rendered as such */}
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
