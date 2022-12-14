import React from 'react';

function Welcome() {
  return (
    <div className="login-signup">
      <h1>Welcome to Wunderpark!</h1>
      <button
        className="submit-button"
        onClick={(e) => {
          showCorrectModal('showLogIn');
        }}
      >
        Log In
      </button>
      <p>or</p>
      <button
        className="submit-button"
        onClick={(e) => {
          showCorrectModal('showCreateAccount');
        }}
      >
        Create Account
      </button>
    </div>
  );
}

export default Welcome;
