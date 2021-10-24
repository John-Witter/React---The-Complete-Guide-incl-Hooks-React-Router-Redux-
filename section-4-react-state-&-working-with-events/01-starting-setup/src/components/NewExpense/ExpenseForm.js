// users should be able to:
// enter a title, amount, and use a date picker to enter a date
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // refactor to use a single state obj
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    const titleChangeHandler = (e) => {
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle:e.target.value
        //     }
        // });
        setEnteredTitle(e.target.value)
    };

    const amountChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput, 
        //     enteredAmount: e.target.value,
        // });
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput, 
        //     enteredDate: e.target.value,
        // });
        setEnteredDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault()

        // combine all entered data
        // the one state approach would already be this
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate + "T00:00:00"),
        };

        console.log('expenseDate:', expenseData)
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
