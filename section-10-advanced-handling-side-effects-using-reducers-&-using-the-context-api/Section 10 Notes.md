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


* NOTE: The above useEffect has NO DEPENDENCIES
    * This makes the useEffect run only once, on the first render
        * This is because the useEffect's dependencies never change (it has none)