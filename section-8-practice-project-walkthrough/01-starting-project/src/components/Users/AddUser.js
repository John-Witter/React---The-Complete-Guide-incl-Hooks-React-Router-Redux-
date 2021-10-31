// Render something on the screen that allows the user to enter Name & Age
// and a button to submit
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        // validate input
        // no empty values, age >= 1
        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty value).",
            });
            return;
        }

        if (+enteredAge < 1) {
            // the "+" forces enteredAge to be a Number0
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0).",
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        // when the backdrop div or "Okay" button on the ErrorModal is clicked,
        // setError to null will skip the render phase for ErrorModal below
        setError(null);
    }

    return (
        <div>
            {error && (
                <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />
                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        type="text"
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
