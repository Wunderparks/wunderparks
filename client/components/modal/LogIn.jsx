import React, { useState } from 'react';

function LogIn() {
  return (
    <div className="login-modal">
      <h4>Log in:</h4>
      <div className="input-container">
        <label>Username</label>
        <input type="text" name="username" required className="login-input" />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input type="text" name="password" required className="login-input" />
      </div>
      <div className="button-container">
        <input type="submit" className="submit-button" />
      </div>
      <div className="close-container">
        <a href="#">Close</a>
      </div>
    </div>
  );
}

export default LogIn;
