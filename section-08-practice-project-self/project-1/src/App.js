import { useState } from "react";
import DisplayUsers from "./Components/DisplayUsers";
import Input from "./Components/Input";

function App() {
    const [users, setUsers] = useState([]);

    const onAddUser = (user) => {
        setUsers((prevUsers) => setUsers([user, ...prevUsers]));
    };

    const deleteItemHandler = (userId) => {
        setUsers((prevUsers) => {
            const updatedUsers = prevUsers.filter(user => user.id !== userId)
            return updatedUsers
        });
    };

    return (
        <div className="App">
            <Input onAddUser={onAddUser} />
            <DisplayUsers users={users} onDeleteItem={deleteItemHandler} />
        </div>
    );
}

export default App;
