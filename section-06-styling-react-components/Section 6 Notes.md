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


## Inline styles suck 

## Setting CSS classes Dynamcally
* Set up the CSS classses in a separate folder like normal.
* Apply the style classes if needed 


```javascript
/* in CourseInput.js */
<div className={`form-control ${!isValid ? 'invalid' : ''}`}>


/* in CourseInput.css */
/* if the class 'invalid' is on the same element as form-control */
    /* target the input  */
.form-control.invalid input {
    border-color: red;
    background: #ffd7d7;
}

.form-control.form-control.invalid label {
    color: red;
}
```

#### STEPS:
1. Specify some goal
2. Specify some alternative states (ex: sometimes have className of 'invalid')
3. Let React manage the DOM


### Regular CSS classes become globally scoped once 1 component imports them.
    This can happen in accidental duplicated CSS class names which will cause
    style overlapping.

## [Styled Components](https://styled-components.com/)
    A package to help build components with certain styles attached to them.
    The styles only affect the components they're attached to.

* Installation:
* ```npm install --save styled-components```

[Tagged Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

* The ```styled``` package has methods for all HTML elements!
* For pseudo-selectors (e.g.: ```.button:focus```) use the ampersand symbo (```&```)
* The Styled Components package generates unique class names for CSS styles