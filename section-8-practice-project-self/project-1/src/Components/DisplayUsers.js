const DisplayUsers = (props) => {
    return (
        <div>
            <ul>
                {props.users.length > 0 && props.users.map(user=> {
                    return (
                        <li>
                            {`${user.name} (${user.age} years old)`}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DisplayUsers