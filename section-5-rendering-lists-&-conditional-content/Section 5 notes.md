## Use prevState when setState depends on previous state
ex from App.js:
```javascript
const addExpenseHandler = expense => {
    setExpenses(prevExpenses => setExpenses([expense, ...prevExpenses]))
}
```