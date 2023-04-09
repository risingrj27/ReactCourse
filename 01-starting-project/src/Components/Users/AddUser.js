import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModel';

const AddUser = (props) => {
  const [enteredUserName, setUserName] = useState('')
  const [enteredAge, setAge] = useState('')
  const [error, setErrormodel] = useState(false)
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length == 0) {
     
      
    }

    if (enteredAge < 1) {
      setErrormodel(true);
    }

    props.usersData(enteredUserName, enteredAge)
    console.log(enteredAge, enteredUserName)
    setUserName('')
    setAge('')
  };

  const usernameHandler = (event) => {
    setUserName(event.target.value)
  }

  const ageHandler = (event) => {

    setAge(event.target.value)
  }

  const closeErrorModel = (e) =>{
    setErrormodel(e)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUserName} onChange={usernameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageHandler} />
        <Button type="submit">Add User</Button>
      </form>

      {
       error && <ErrorModal onErrormodel = {closeErrorModel}  title="ritesh" message="bestest developer" />
      }
    </Card>

  );
};

export default AddUser;