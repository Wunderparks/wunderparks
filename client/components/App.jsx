import React, { useEffect, useState, useLayoutEffect } from 'react';
import Modal from './modal/modal.jsx';
import Sidebar from './Sidebar.jsx';

import MainContainer from '../containers/MainContainer.jsx';

const App = () => {
  // let codes = [];
  const [codes, setCodes] = useState([]);

  const handleUpdate = (newData) => {
    setData([newData, ...data]);
  };

  useEffect(() => {
    fetch('http://localhost:3000/user/', {
      method: 'GET',
      headers: { 'Content-Type': 'Application/JSON' },
    })
      .then((res) => res.json())
      .then((data) => {
        setCodes(data);
      })
      .catch((err) => console.log('AddPark fetch POST to api: ERROR: ', err));
  }, []);


  return (
    <div className="app">
      <Sidebar setData={handleUpdate} />
      <div className="right">
        <h1> WÜNDER PARKS</h1>
        <MainContainer codes={codes} />
      </div>
      <Modal />
    </div>
  );
};

export default App;
