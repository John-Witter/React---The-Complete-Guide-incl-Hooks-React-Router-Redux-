import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

        // setFormIsValid(
        //   event.target.value.includes('@') && enteredPassword.trim().length > 6
        // );
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        // setFormIsValid(
        //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
        // );
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@"));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

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

    
     // add useEffect to have 1 place where the form is validated
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

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailIsValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordIsValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
