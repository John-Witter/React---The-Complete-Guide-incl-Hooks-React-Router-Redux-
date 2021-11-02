# Section 10 Advanced Handling Side Effects Using Reducers & Using The Context API

## What is an "Effect" (or a "Side Effect")?

    React Main Job: Render UI & React to User Input

    Evaluate & Render JSX
    Manage State & Props
    React to (User) Events & Input
    Re-evaluate Component upon State & Prop Changes    

**Side Effects are anything else that happen in your application**

* Sending HTTP requests to backend servers
* Storing something in localstorage
* Set & Manage Timers / Intervals

## useEffect hook
    useEffect(() => { ... }, [ dependencies ]);

    1st arg: A function that should be executed AFTER every component evaluation IF the specified dependencies changed

        - Side effect code goes into this function

    2nd arg: Dependencies of this effect - the fn only runs if the dependencies changed

        - Specify your dependencies of your function here