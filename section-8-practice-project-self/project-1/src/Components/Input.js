import { useState } from "react";
import "./Input.css"

const Input = (props) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const user = {
            name: username,
            age: age,
        };

        props.onAddUser(user)
        setUsername("");
        setAge("")
    };

    return (
        <div className="input-container">
            <form className="input-form" onSubmit={submitHandler}>
                <label htmlFor="username-input">Username</label>
                <input
                    id="username-input"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <label htmlFor="age-input">Age (Years)</label>
                <input
                    id="age-input"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />
                <button className="input-button">Add User</button>
            </form>
        </div>
    );
};

export default Input;
