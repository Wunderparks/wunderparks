import React, { useEffect, useLayoutEffect } from 'react';
import Modal from './modal/modal.jsx';
import Sidebar from './Sidebar.jsx';

import MainContainer from '../containers/MainContainer.jsx';

const App = () => {
  let codes = [];
  useLayoutEffect(() => {
    fetch(`http://localhost:3000/user/`, {
      method: 'GET',
      headers: { 'Content-Type': 'Application/JSON' },
    })
      .then((res) => res.json())
      .then(console.log('chaining works'))
      .then((data) => {
        console.log('data:', data);
        codes = data;
        console.log('codes: ', codes);
      })
      .catch((err) => console.log('AddPark fetch POST to api: ERROR: ', err));
  }, []);

  console.log('codes after fetch, ', codes);

  return (
    <div className="app">
      <Sidebar />
      <div className="right">
        <h1> WÜNDER PARKS</h1>
        <MainContainer codes={codes} />
      </div>
      <Modal />
    </div>
  );
};

export default App;
