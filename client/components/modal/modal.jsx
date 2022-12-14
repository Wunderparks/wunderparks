import React, { useState, useEffect } from 'react';
import axios from 'axios';
import stateObj from '../../public/states.js';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  // declare userData using hooks
  const [userData, setUserData] = useState({});
  const [npsData, setNpsData] = useState([]);

  const testData = {
    date: '12/10/22',
    rating: 5,
    parkActivities: ['Biking', 'Camping', 'Fishing', 'Hiking', 'Swimming'],
  };

  // send fetch request to DB to get user info
  useEffect(() => {
    fetch(`http://localhost:3000/NPS/modalInfo/${props.parkCode}`)
      .then((res) => res.json())
      .then((data) => {
        setNpsData(data);
        console.log('data from NPS get request: ', data);
      })
      .catch((err) => console.log('error fetching NPS data', err));

    fetch(`http://localhost:3000/user/${props.parkCode}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('data in the modal is: ', data);
        setUserData(data);
        // console.log('user data: ', data);
      })
      .catch((err) => console.log('error getting user data', err));
  }, []);

  // iterate over activities completed in park activities
  function parksActivitiesExist() {
    // declare parkActivities array, initialized to strongpty arr
    const parkActivitiesList = [];
    if (userData.activitiesCompleted) {
      for (let i = 0; i < userData.activitiesCompleted.length; i++) {
        // create list items for each of these activities
        // push to parkActivities arr
        parkActivitiesList.push(<li>{userData.activitiesCompleted[i]}</li>);
      }
      return (
        <p className="park_activities">
          <span className="label">Activities Completed: </span>
          <ul>{parkActivitiesList}</ul>
        </p>
      );
    } else {
      return null;
    }
  }

  // declare a function that checks if userData is null
  function userDataExists() {
    console.log('npsData inside userDataExists :', npsData);
    if (userData.date) {
      return (
        <div className="user_info">
          {/* <h4>User Log</h4> */}
          {/* {props.parkCode} */}
          <div className="left">
            <p className="date_visited">
              <span className="label">Date Visited: </span>
              <br />
              {userData.date}
            </p>
            <p className="user_notes">
              <span className="label">Notes: </span>
              <br />
              {userData.notes}
            </p>
          </div>
          {parksActivitiesExist()}
        </div>
      );
    }
    else return null;
  }

  function npsDataComponent() {
    return (
      <div className="api_data">
        <h4>Park Information</h4>
        <p className="description">{npsData.description}</p>
        <img src={npsData.photo} className="photo" />
      </div>
    );
  }
  // this is where we put the div for userdata
  // if null, return null

  return (
    <div className={`modal ${props.className}`} onClick={props.onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h3 className="title">
            {props.parkName + ' National Park '} <br/>
            <small className="state">{stateObj[npsData.states]}</small>
          </h3>
          <button className="close" onClick={props.onClose}>
            Close
          </button>
        </div>
        <div className="body">
          {userDataExists()}
          <hr></hr>
          {npsDataComponent()}
        </div>
        <div className="push"></div>
      </div>
      <div className="footer">
        <a className="copywrite">WÜNDERPARK ©</a>
      </div>
    </div>
  );
};

export default Modal;
