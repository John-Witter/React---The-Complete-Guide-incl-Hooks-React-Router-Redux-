import "./DisplayUsers.css"

const DisplayUsers = (props) => {
    return (
        <div className="users-container">
            <ul className="users-list">
                {props.users.length > 0 && props.users.map(user=> {
                    return (
                        <li className="user-list-item" key={Math.random()}>
                            {`${user.name} (${user.age} years old)`}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DisplayUsers