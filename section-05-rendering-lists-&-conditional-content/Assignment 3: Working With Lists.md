# Assignment 3: Time To Practice: Working with Lists

    Make the Filter by year functionality work.
    
    When a user selects a year from the drop-down, display only the expenses from that year.


### HINTS

1. You can filter arrays w/the filter() method, similar to map()
2. You shouldn't think too complex. Don't change the overall expenses array. 
    * Derive a new array based on the expenses array which is a subset of that array for 
the chosen filter.


### My Solution

```javascript
// Expenses.js
// filter props.items (all expenses)
// so item.date.getFullYear = year (getFullYear() returns a Number)
// (using filteredYear causes error b/c setState is async)
setFilteredExpenses(
    props.items.filter((item) => item.date.getFullYear() === +year)
);

...

return (
    ...
{filteredExpenses.map((expense) => (
    <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
    />
))}
)
```