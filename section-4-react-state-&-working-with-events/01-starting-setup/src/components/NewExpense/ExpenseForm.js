// users should be able to:
// enter a title, amount, and use a date picker to enter a date
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState('')
    // const [enteredDate, setEnteredDate] = useState('')

    // refactor to use a single state obj
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    const titleChangeHandler = (e) => {
        setUserInput({
            ...userInput, // spread oprtr pull key:value pairs from userInput
            enteredTitle: e.target.value,
        });
    };

    const amountChangeHandler = (e) => {
        setUserInput({
            ...userInput, 
            enteredAmount: e.target.value,
        });
    };

    const dateChangeHandler = (e) => {
        setUserInput({
            ...userInput, 
            enteredDate: e.target.value,
        });
    };

    return (
        <form>
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