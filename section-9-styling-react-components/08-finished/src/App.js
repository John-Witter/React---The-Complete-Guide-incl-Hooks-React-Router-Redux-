import React, { useState } from 'react';
import Wrapper from './components/Helpers/Wrapper';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
      <div>
       {/* <Wrapper> */}
          <AddUser onAddUser={addUserHandler} />
          <UsersList users={usersList} />
      {/* </Wrapper> */}
      </div>
  );
}

export default App;
