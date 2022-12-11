import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  // declare userData using hooks
  const [userData, setUserData] = useState([]);
  const [npsData, setNpsData] = useState([]);

  const testData = {
    date: '12/10/22',
    rating: 5,
    parkActivities: ['Biking', 'Camping', 'Fishing', 'Hiking', 'Swimming'],
  };

  // send fetch request to DB to get user info
  // useEffect(() => {

  // axios.all([
  //   axios.get({'http://localhost:3000/user'})
  // ])

  //   fetch(`http://localhost:3000/user/`{parkCode}) 
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data);
  //     })
  //     .catch((err) => console.log('error getting user data'), err);
  // }, []);

  // declare parkActivities array, initialized to empty arr
  const parkActivitiesList = [];
  // iterate over activities completed in park activities
  for (let i = 0; i < testData.parkActivities.length; i++) {
    // create list items for each of these activities
    // push to parkActivities arr
    parkActivitiesList.push(<li>{testData.parkActivities[i]}</li>);
  }

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
          <div className="user_info">
            USER info from database
            <p className="date_visited">Date Visited: {testData.date}</p>
            <p className="user_rating">User Rating: {testData.rating}</p>
            <p className="park_activities">
              Activities Completed:
              <ul>{parkActivitiesList}</ul>
            </p>
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
