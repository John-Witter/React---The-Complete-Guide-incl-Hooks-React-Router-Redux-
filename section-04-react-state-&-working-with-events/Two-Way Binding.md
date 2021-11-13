# Two-Way Binding (a.k.a. Controlled Input)
* for inputs, don't just listen for changes, but also pass new values back into the input

* used to reset or change the input programmatically

* do this by adding the ```value``` attribute to the ```input``` element
    * this lets us feed the state back into the input
    * every time the state value changes, the ```value``` attribute of the input changes


## ex:
(from ExpenseForm.js)
```javascript
...

 [enteredTitle, setEnteredTitle] = useState('')

const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
        title: enteredTitle,
    };

    ...
    
    setEnteredTitle('')
};

return (
    <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
        value={enteredTitle}
    </div>
)
```