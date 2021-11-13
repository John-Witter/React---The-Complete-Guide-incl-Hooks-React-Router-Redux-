// return a form for inputs
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(), // imperfect but good enough here
        };

        props.onAddExpense(expenseData);
    };

    // render button if showForm is false, else render form
    // if type passed from the return below or from ExpenseFrom ='button'
        // set showForm to false
    const buttonOrForm = (type) => {
        if (type === "button") {
            setShowForm(false);
        } else {
            setShowForm(true);
        }
    };

    if (showForm === false) {
        return (
            <div className="new-expense">
                <button onClick={buttonOrForm}>Add New Expense</button>
            </div>
        );
    }

    return (
        <div className="new-expense">
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                buttonOrForm={buttonOrForm}
            />
        </div>
    );
};

export default NewExpense;
