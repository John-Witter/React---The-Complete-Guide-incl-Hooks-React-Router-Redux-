import "./DisplayUsers.css";

const DisplayUsers = (props) => {

    const handleDelete = id => {
        props.onDeleteItem(id);
    }

    return (
        <div className="users-container">
            <ul className="users-list">
                {props.users.length > 0 &&
                    props.users.map((user) => {
                        return (
                            <li
                                className="user-list-item"
                                key={Math.random()}
                                onClick={() => handleDelete(user.id)}
                            >
                                {`${user.name} (${user.age} years old)`}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default DisplayUsers;
