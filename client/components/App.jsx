import React from 'react';
import Modal from './modal/modal.jsx';
import Sidebar from './Sidebar.jsx'

import MainContainer from '../containers/MainContainer.jsx';

const App = () => (
  <div className="app">
    <h1>WÜNDER PARKS</h1>
    <Sidebar />
    <MainContainer />
    <Modal />
  </div>
);

export default App;
