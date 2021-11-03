# Section 10 Advanced Handling Side Effects Using Reducers & Using The Context API

## What is an "Effect" (or a "Side Effect")?

    React Main Job: Render UI & React to User Input

    Evaluate & Render JSX
    Manage State & Props
    React to (User) Events & Input
    Re-evaluate Component upon State & Prop Changes

**Side Effects are anything else that happen in your application**

-   Sending HTTP requests to backend servers
-   Storing something in localstorage
-   Set & Manage Timers / Intervals
-   Anything not directly related to the UI

# useEffect hook

    useEffect(() => { ... }, [ dependencies ]);

    1st arg: A function that should be executed AFTER every component evaluation IF the specified dependencies changed

        - Side effect code goes into this function

    2nd arg: Dependencies of this effect - the fn only runs if the dependencies changed

        - Specify your dependencies of your function here

## Infinite loop w/o useEffect

-   The following code causes an infinite loop
    1. it checks if `storedUserLoggedInInformation === 1`
    2. if user is logged in, it calls the `setIsLoggedIn` setState function
    3. setState functions cause a re-render
    4. now we're back to step 1.

```javascript
function App() {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (storedUserLoggedInInformation === '1') setIsLoggedIn(true)

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways

        // localStorage persists data after refreshes
        localStorage.setItem("isLoggedIn", "1"); // 0 is not, 1 is logged in
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };
```

## Fix the code above with useEffect!

```javascript
import { useState, useEffect} from 'react'

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
        if (storedUserLoggedInInformation === '1') setIsLoggedIn(true)
    }, [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways

        // localStorage persists data after refreshes
        localStorage.setItem("isLoggedIn", "1"); // 0 is not, 1 is logged in
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
    };
```

-   NOTE: The above useEffect has NO DEPENDENCIES
    -   This makes the useEffect run only once, on the first render
        -   This is because the useEffect's dependencies never change (it has none)

## useEffect w/dependencies

```javascript
// from Login.js
// add useEffect to have 1 place where the form is validated
// this code is a side effect of user enterred data
useEffect(() => {
    setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
    );
}, [enteredEmail, enteredPassword]); // dependencies
```

    useEffect is often used when when certain data,
    typically some state or some props change.

## useEffect Cleanup Function

    These functions are typically anonymous arrow functions
    returned by the useEffect

    The Cleanup Function runs every time the useEffect runs, except for the 1st time!

    The Cleanup Function also runs when the component it is in unmounts from the DOM
    (i.e. whenever the component is resused)

### **[Debouncing](https://medium.com/swlh/debouncing-in-react-js-83befe93a5ee)**

    "Ensure that a time-consuming task does not fire so often.
     In other words, it limits rates at which functions get invoked."

```javascript
useEffect(() => {
    const timer = setTimeout(() => {
        console.log("CHECKING FORM VALIDITY!");
        setFormIsValid(
            enteredEmail.includes("@") && enteredPassword.trim().length > 6
        );
    }, 500);

    //clear the timeout after each keystroke so that there is only 1 timer
    // only call the fn in timer if the user stops typing for .5 seconds
    // useEffect cleanup function
    return () => {
        console.log("CLEANUP FUNCTION RAN");
        clearTimeout(timer);
    };
}, [enteredEmail, enteredPassword]); // dependencies

// check the console.logs in the browsers dev tools to get 
// a better understanding of when the cleanup function runs
```

## useEffect Summary Code Examples

```javascript
    // this runs each time the component mounts, for every state update, and
    // on unmount
    useEffect(() => {
        console.log("EFFECT RUNNING");
    });

    // this runs only on the first render
     useEffect(() => {
         console.log("EFFECT RUNNING ON 1st RENDER");
     }, []);
    
    
     // this runs on the first render and each time enteredEmail changes
     useEffect(() => {
         console.log("EFFECT RUNNING AFTER enteredEmail CHANGES");
         
         // this runs before the rest of the useEffect, after the 1st render
         return () => console.log('CCCCLLLLEEEEAAAANNNNUUUUPPPP')
     }, [enteredEmail]);

```


# useReducer
    Similar to useState

    Used when updating a state depends on another state, instead of using useState,
    merge the states into a reducer w/useReducer

    useReducer combines multiple related states

```javascript
// useReducer returns an array w/2 values
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

// state=latest state snapshot
// dispatchFn = fn to update state / dispatch a new action
// reducerFn is triggered automatically when an action is dispatched
// reducerFn receives latest state snapshot & returns new, updated state
// iniFn is used to set initial state programmatically
```

### Dispatch an action w/ dispatchFN    

### reducerFn
    reducerFn accepts 2 args: prevState, action
    reducerFn returns updated state


## Use useReducer to combine the value and validity of email input in Login.js into one state

</br>
</br>
</br>

# useReducer vs useState

| useState | useReducer |
| ---- | ---- |
| The main state management tool | Great if you need "more power" |
| Great for independent pieces of state / data | Should be considered if you have related pieces of state / data |
| Great if state updates are easy & limited to a few kinds of updates | Can be helpful if you have more complex state updates |