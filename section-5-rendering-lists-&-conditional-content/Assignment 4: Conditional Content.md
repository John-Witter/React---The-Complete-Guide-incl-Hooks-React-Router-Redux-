# Assignment: Time to Practice: Conditional Content

    Currently the input form is always shown.

    Change the logic to add a button to show the form.
    The button will say "Add New Expense".

    When the button is clicked the button disapears and the form is shown.

    When "Add Expense" button is pressed, the form disapears and the
    "Add New Expense" button is shown.

    Add a "Cancel" button to the form which also makes the form disapear,
    but without submitting it.

## My Solution:

```javascript
// in NewExpense.js
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
            <button onClick={buttonOrForm('form')}>Add New Expense</button>
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
```

```javascript
// in ExpenseForm.js

...

const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate + "T00:00:00"),
    };

    props.onSaveExpenseData(expenseData);
    props.buttonOrForm("button");

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
};

const cancelHandler = (e) => {
    e.preventDefault();

    props.buttonOrForm("button");
};

...

return (
    
    ...

    <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
    </div>

    ...

)
```
