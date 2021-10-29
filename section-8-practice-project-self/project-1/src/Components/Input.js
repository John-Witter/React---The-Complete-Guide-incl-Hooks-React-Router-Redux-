import { useState } from "react";

const Input = (props) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();

        const user = {
            name: username,
            age: age,
        };

        props.onAddUser(user)
    };

    return (
        <div>
            <form className="input-form" onSubmit={submitHandler}>
                <label htmlFor="username-input">Username</label>
                <input
                    id="username-input"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="age-input">Age (Years)</label>
                <input
                    id="age-input"
                    onChange={(e) => setAge(e.target.value)}
                />
                <button>Add User</button>
            </form>
        </div>
    );
};

export default Input;
