import { useState } from "react";
import DisplayUsers from "./Components/DisplayUsers";
import Input from "./Components/Input";

function App() {
    const [users, setUsers] = useState([])


    const onAddUser = (user) => {
        setUsers(prevUsers => setUsers([user, ...prevUsers]))
    };

    return (
        <div className="App">
            <Input onAddUser={onAddUser} />
            <DisplayUsers users={users} />
        </div>
    );
}

export default App;
