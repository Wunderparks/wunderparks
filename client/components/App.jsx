import React, { useEffect, useState, useLayoutEffect } from 'react';
import SidebarContainer from '../containers/SidebarContainer.jsx';
import MainContainer from '../containers/MainContainer.jsx';
import CreateUser from './modal/CreateUser.jsx';
import LogIn from './modal/LogIn.jsx';
import Welcome from './modal/Welcome.jsx';

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

  // States for rendering the different compontents
  const [welcome, setWelcome] = useState(true);
  const [showCreateAccount, setCreateAccount] = useState(false);
  const [showLogIn, setLogIn] = useState(false);
  const [showWebsite, setShowWebsite] = useState(false);

  const renderToPage = () => {
    if (welcome === true) {
      return <Welcome showCorrectModal={showCorrectModal} />;
    } else if (showCreateAccount === true) {
      return (
        <CreateUser
          setWelcome={setWelcome}
          welcome={welcome}
          setCreateAccount={setCreateAccount}
        />
      );
    } else if (showLogIn === true) {
      return <LogIn />;
    } else if (showWebsite === true) {
      return (
        <div className="right">
          <div className="float">
            <h1> WÜNDER PARKS</h1>
          </div>
          <MainContainer codes={codes} />
        </div>
      );
    }
  };

  //show login or create user modal

  function showCorrectModal(component) {
    setWelcome(false);
    if (component === 'showCreateAccount') {
      setCreateAccount(true);
    } else if (component === 'showLogIn') {
      setLogIn(true);
    }
  }

  return (
    <div className="app">
      {renderToPage()}
      {/* <LogIn /> */}
      {/* <CreateUser /> */}
      {/* <SidebarContainer codes={codes} />
      <div className="right">
        <div className="float">
          <h1> WÜNDER PARKS</h1>
        </div>
        <MainContainer codes={codes} />
      </div> */}
    </div>
  );
};

export default App;
