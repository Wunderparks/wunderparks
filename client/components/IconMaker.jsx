import React, { useState, useEffect } from 'react';
import Icon from './Icon.jsx';

// import in the images.js file
import images from '../public/images.js';

function IconMaker() {
  // console.log(images);
  //   const [date, setData] = useState;
  //     useEffect(() => {
  //         // we need exact path for the
  //         fetch('http://localhost:3000/')
  //       })
  // // declare an array of all the keys in the images object
  //   // we need to iterate through the keys of the images.jsx object
  //       // pass each key to Icon as a prop
  //       const parksArr = Object.keys(data);
  //       console.log(parksArr)
  //   // we return renders of Icon passing in the array of keys

  const parksArr = [];
  for (let park in images) {
    parksArr.push(<Icon key={park} park={park} imgLink={images[park]} />);
    // console.log('link :', imgLink/)
  }

  return <div className="container">{parksArr}</div>;
}

export default IconMaker;
