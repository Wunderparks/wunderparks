import React, { useState, useEffect } from 'react';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h3 className="title">{props.parkName + ' National Park'}</h3>
          <button className="close" onClick={props.onClose}>
            X
          </button>
        </div>
        <div className="body">
          <div className="user_info">
            USER info from database
            <p className="date_visited"></p>
            <p className="park_activities"></p>
          </div>
          <hr></hr>
          <div className="api_data">API data about specific park</div>
        </div>
        <div className="push"></div>
      </div>
      <div className="footer">copywrite: WÜNDERPARK©</div>
    </div>
  );
};

export default Modal;
