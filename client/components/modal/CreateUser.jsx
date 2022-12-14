import React, { useState } from 'react';

function CreateUser() {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const sendInfo = (e) => {
    const requestBody = { username, password, name };
    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(requestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-modal">
      <h4>Create your account:</h4>
      <div className="input-container">
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          className="login-input"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
            console.log(name);
          }}
        />
      </div>
      <div className="input-container">
        <label>Username</label>
        <input
          type="text"
          name="username"
          required
          className="login-input"
          id="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input
          type="text"
          name="password"
          required
          className="login-input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="button-container" onClick={(e) => sendInfo(e)}>
        <input type="submit" className="submit-button" />
      </div>
      <div className="close-container">
        <a href="#">Close</a>
      </div>
    </div>
  );
}

export default CreateUser;
