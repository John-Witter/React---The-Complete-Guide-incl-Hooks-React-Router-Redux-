## Use prevState when setState depends on previous state

ex from App.js:

```javascript
const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => setExpenses([expense, ...prevExpenses]));
};
```

## Conditional Content

    Rendering different output under different conditions

    E~xample from Expenses.js:

```javascript
...

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

...

return (
    {expensesContent}
)
```

## You can store JSX as a variable

    Example from Expenses.js:

```javascript
let expensesContent = <p>No expenses found.</p>;
```
