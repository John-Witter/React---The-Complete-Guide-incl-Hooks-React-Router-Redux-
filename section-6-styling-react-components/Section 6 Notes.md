# [Section 6 Styling React Components](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25597256#questions/15913124)

## Dynamically Inline Styles

    Currently, you can add a blank goal.

    If user enters something invalid, use inline styling to:
        * Add a red border and a slightly red background color to the input
        * Add a red color to the label

    In CourseInput

```javascript
const [isValid, setIsValid] = useState(true);

const formSubmitHandler = (event) => {
    event.preventDefault();
    // trim() removes excess whitespace at beginning or end of text
    // if enteredValue is blank, don't do anything on submit
    // isValid => false
    if (enteredValue.trim().length === 0) {
        setIsValid(false);
        return;
    }
    setIsValid(true);
    props.onAddGoal(enteredValue);
    setEnteredValue("");
};

return (
    <input
        type="text"
        onChange={goalInputChangeHandler}
        style={{
            borderColor: !isValid ? "red" : "#ccc",            // %%%%%% \\
            background: !isValid ? "#ffdddd" : "transparent", //  %%%%%%  \\
        }}
    />
);
```
