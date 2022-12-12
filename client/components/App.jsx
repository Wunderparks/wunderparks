import React from 'react';
import Modal from './modal/modal.jsx';
import Sidebar from './Sidebar.jsx';

import MainContainer from '../containers/MainContainer.jsx';

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="right">
      <h1> WÜNDER PARKS</h1>
      <MainContainer />
    </div>
    <Modal />
  </div>
);

export default App;
