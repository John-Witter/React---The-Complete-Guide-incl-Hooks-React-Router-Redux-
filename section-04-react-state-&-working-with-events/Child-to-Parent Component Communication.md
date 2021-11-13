# Child-to-Parent Component Communication (Bottom-Up)

    How to pass data from ExpenseForm.js to App.js

1. Pass the ```expenseData``` form ```ExpenseForm``` up to ```NewExpense```
2. In ```NewExpense``` enrich the ```expenseData``` by giving it a unique id
3. pass the new data up to ```App.js```

This is done by simply passing down functions which take in data.

Once the props fn is invoked w/data, that data becomes accessible in the parent component

ex:

```javascript
// in App.js

const addExpenseHandler = expense => {
        console.log('In App.js')
        console.log(expense)
}

return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
    </div>
);


// in NewExpense

const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(), // imperfect but good enough here
    };

    props.onAddExpense(expenseData);
};

return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
);



// in ExpenseForm

...

const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate + "T00:00:00"),
    };

    // execute here to access the fn in NewExpense
    props.onSaveExpenseData(expenseData);

...

```