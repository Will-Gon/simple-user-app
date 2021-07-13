import React, { useState } from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    
    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };

    return (
        <div>
            <ErrorModal title="an error occured!" message="something went wrong!"/>
                <Card className={classes.input}>
                    <form onSubmit={addUserHandler}>
                        <label htmlFor="username">Username</label>
                        <input id="username" value={enteredUsername} type="text" onChange={usernameChangeHandler} />
                        <label htmlFor="Age">Age (Years)</label>
                        <input id="Age" value={enteredAge} type="number" onChange={ageChangeHandler} />
                        <Button type="submit">Add User</Button>
                    </form>
                </Card>
        </div>
    );
};

export default AddUser;