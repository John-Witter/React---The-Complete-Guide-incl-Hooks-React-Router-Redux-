// Render something on the screen that allows the user to enter Name & Age
// and a button to submit
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age</label>
                <input id="age" type="text" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;
