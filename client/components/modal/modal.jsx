import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        setNpsData(data)
        console.log('data from NPS get request: ', data)
      });

    fetch(`http://localhost:3000/user/${props.parkCode}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('data in the modal is: ', data);
        setUserData(data)
        // console.log('user data: ', data);
      })
      .catch((err) => console.log('error getting user data', err));
  }, []);

  // iterate over activities completed in park activities
  // function parksActivitiesExist() {
  //   // declare parkActivities array, initialized to empty arr
  //   const parkActivitiesList = [];
  //   for (let i = 0; i < userData.activitiesCompleted.length; i++) {
  //     // create list items for each of these activities
  //     // push to parkActivities arr
  //     parkActivitiesList.push(<li>{userData.activitiesCompleted[i]}</li>);
  //   }
  //   return (
  //     <p className="park_activities">
  //     Activities Completed:
  //     <ul>{parkActivitiesList}</ul>
  //   </p>
  //   );
  // }

  // declare a function that checks if userData is null
  function userDataExists() {
    // console.log(userData);
    return (
      <div className="user_info">
        USER info from database
        <p className="date_visited">Date Visited: {userData.date}</p>
        <p className="user_rating">User Rating: {testData.rating}</p>
        <p className="user_notes">User Notes: {userData.notes}</p>
        {/* {parksActivitiesExist()} */}
        <hr></hr>
      </div>
    );
  }
  // this is where we put the div for userdata
  // if null, return null

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h3 className="title">{props.parkName + ' National Park'}</h3>
          <h3>park code is {props.parkCode}</h3>
          <button className="close" onClick={props.onClose}>
            X
          </button>
        </div>
        <div className="body">
          {userDataExists()}
          <div className="api_data">API data about specific park</div>
        </div>
        <div className="push"></div>
      </div>
      <div className="footer">copywrite: WÜNDERPARK©</div>
    </div>
  );
};

export default Modal;
