import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// display amount of expense and date

function ExpenseItem(props) {

const expenseTitle = props.title;
const expenseAmount = props.amount;

    return (
        <div className="expense-item">
            <div>
{/* "date" is name of the the prop passed into ExpenseDate*/}
{/* b/c ExpenseDate uses "props.date" */}
{/* date={props.date} => here, props.date refers to ExpenseItem(props) */}
                <ExpenseDate date={props.date} />
            </div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
