import React, { useState,useEffect } from "react";

const ManageState = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setCount] = useState(21);

    const fullName = firstName + ' ' + lastName;
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    useEffect(() => {
    document.title = 'You are ' + age + ' years old!'
  })
  return (
    <>
      <center>
        <h3>Managing State</h3>
        <label htmlFor="">FirstName: </label>
        <input type="text" placeholder="Enter the Firstname" value={firstName} onChange={handleFirstName}/>
        <br />
        <br />
        <label htmlFor="">LastName: </label>
        <input type="text" placeholder="Enter the Secondname" value={lastName} onChange={handleLastName}/>
        <br />
        <br />
        <p>
          Your ticket will be issued to: <b>{fullName}</b>
              </p>
              
              <hr />
              <h3>Your Age : {age} </h3>
              <button onClick={() => setCount(age + 1)}>+</button>
              <button onClick={()=>setCount(age-1)}>-</button>
              
      </center>
    </>
  );
};

export default ManageState;
