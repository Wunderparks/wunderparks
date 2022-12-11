import React, { _useEffect, useState } from 'react';
import parkcodes from '../public/parkcodes.js'

// const useInput = (init) => {
//   const [value, setValue] = useState(init);
//   const onChange = (e) => {
//     setValue(e.target.value);
//   };
//   //return the value with the onChange function instead of setValue;
//   return [value, onChange];
// };

const Sidebar = () => {
  const [date, setDate] = useState(null);
  const [activities, setActivities] = useState({
    biking: false,
    camping: false,
    climbing: false,
    fishing: false,
    guided: false,
    hiking: false,
    paddling: false,
    snorkeling: false,
    swimming: false,
    wildlife: false,
  });

  const [parkCode, setParkCode] = useState('')
  const [notes, setNotes] = useState('')

  function toggleActivities(item) {
    console.log('checkbox for item clicked', item);
    activities[item] = !activities[item];
    console.log('activities state is: ', activities);
  }

  function savePark(event) {
    

    console.log('save park button clicked');
    fetch(`http://localhost:3000/user/${parkCode}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ date, activities, notes }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) =>
        console.log('AddPark fetch POST to api: ERROR: ', err)
      );
  }

// declare parkOptionsArr
  const parkOptions = []
// iterate through the parkcodes js file
  for (let park in parkcodes) {
     parkOptions.push(<option value={parkcodes[park]}>{park}</option>)
  }
  console.log(parkOptions)

  // render an option element for Select, pass in the parkCode value as value, and give the label/input as the parkCode key

  return (
    <div id="sidebar">
      <form className="form">
        <h2>Log a trip</h2>
        <h3></h3>
        <select name="park" id="park" value={parkCode} onChange={(event) => setParkCode(event.target.value)}>
          <option value="">Select Park:</option>
          {parkOptions}
        </select>
        <h3>Date Visited:</h3>
        <input type="date" id="date_visited" value={date} onChange={setDate} />
        <h3>Activities Done</h3>
        <input
          type="checkbox"
          id="biking"
          value={activities.biking}
          onChange={(event) => toggleActivities(event.target.id)}
        />{' '}
        <label htmlFor="biking">Biking</label>
        <input
          type="checkbox"
          id="camping"
          value={activities.camping}
          onChange={(event) => toggleActivities(event.target.id)}
        />{' '}
        <label htmlFor="camping">Camping</label>
        <input
          type="checkbox"
          id="climbing"
          value={activities.climbing}
          onChange={(event) => toggleActivities(event.target.id)}
        />{' '}
        <label htmlFor="climbing">Climbing</label>
        <input
          type="checkbox"
          id="fishing"
          value={activities.fishing}
          onChange={(event) => toggleActivities(event.target.id)}
        />{' '}
        <label htmlFor="">Fishing</label>
        <input
          type="checkbox"
          id="guided"
          value={activities.guided}
          onChange={(event) => toggleActivities(event.target.id)}
        />{' '}
        <label htmlFor="guided">Guided Tours</label>
        <input
          type="checkbox"
          id="hiking"
          value={activities.hiking}
          onChange={(event) => toggleActivities(event.target.id)}
        />{' '}
        <label htmlFor="hiking">Hiking</label>
        <input
          type="checkbox"
          id="paddling"
          value={activities.paddling}
          onChange={(event) => toggleActivities(event.target.id)}
        />{' '}
        <label htmlFor="">Paddling</label>
        <input
          type="checkbox"
          id="snorkeling"
          value={activities.snorkeling}
          onChange={(event) => toggleActivities(event.target.id)}
        />{' '}
        <label htmlFor="snorkeling">Snorkeling</label>
        <input
          type="checkbox"
          id="swimming"
          value={activities.swimming}
          onChange={(event) => toggleActivities(event.target.id)}
        />{' '}
        <label htmlFor="swimming">Swimming</label>
        <input
          type="checkbox"
          id="wildlife"
          value={activities.wildlife}
          onChange={(event) => toggleActivities(event.target.id)}
        />{' '}
        <label htmlFor="wildlife">Wildlife Watching</label>
        <h3>Overall Rating</h3>
        <p>Stretch Feature to click on stars</p>
        <ul>
          <h3>Parks you've visited</h3>
        </ul>
        <li>Stretch Feature</li>
        <li>Stretch Feature</li>
        <li>Stretch Feature</li>
        <button type="submit" id="submit" onClick={savePark}>
          Save Park
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
