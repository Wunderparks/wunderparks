import React, { useEffect, useState } from 'react';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  //return the value with the onChange function instead of setValue;
  return [value, onChange];
};

const Sidebar = ({ setData }) => {
  return (
    <div id='sidebar'>
    
      <h2>Log a trip</h2>

      <h3>Date Visited:</h3>
      <input 
        type='date'
        id='date_visited'
        value='date_visited'
      />

      <h3>Activities Done</h3>
      <input type='checkbox' value='Biking'>Biking</input>
      <input type='checkbox' value='Camping'>Camping</input>
      <input type='checkbox' value='Climbing'>Climbing</input>
      <input type='checkbox' value='Fishing'>Fishing</input>
      <input type='checkbox' value='Guided Tours'>Guided Tours</input>
      <input type='checkbox' value='Hiking'>Hiking</input>
      <input type='checkbox' value='Paddling'>Paddling</input>
      <input type='checkbox' value='Snorkeling'>Snorkeling</input>
      <input type='checkbox' value='Swimming'>Swimming</input>
      <input type='checkbox' value='Wildlife Watching'>Wildlife Watching</input>

      <h3>Overall Rating</h3>
       <p>Stretch Feature to click on stars</p>

      <ul><h3>Parks you've visited</h3></ul>
        <li>Stretch Feature</li>
        <li>Stretch Feature</li>
        <li>Stretch Feature</li>
    </div>
  )
};


export default Sidebar;