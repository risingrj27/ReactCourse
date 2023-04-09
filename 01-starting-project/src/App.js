import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser'
import UsersList from './Components/Users/UsersList';

function App() {
  const [userListData, setUserList] = useState([])
  const usersData =(uName,uAge) =>{
    setUserList((prev) => {
      return [...prev, {name : uName , age: uAge, key:Math.random()}]
    })
  }

  return (
    <div>
      <AddUser usersData={usersData} />
      <UsersList users={userListData} /> 
    </div>
  );
}

export default App;
