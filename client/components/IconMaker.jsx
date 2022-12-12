import React, { useState, useEffect } from 'react';
import Icon from './Icon.jsx';

// import in the images.js file
import images from '../public/images.js';
import parkCodes from '../public/parkcodes.js';

function IconMaker(props) {
  const { codes } = props;
  console.log('props in iconmaker: ', props);
  const parksArr = [];
  for (let park in images) {
    let parkCode;

    Object.keys(parkCodes).forEach((element) => {
      if (element.toLowerCase().includes(park.toLowerCase())) {
        parkCode = parkCodes[element];
      }
    });
    parksArr.push(
      <Icon
        key={park}
        park={park}
        imgLink={images[park]}
        parkCode={parkCode}
        className={codes.includes(parkCode) && 'color'}
      />
    );
    // console.log('link :', imgLink/)
  }

  return <div className="container">{parksArr}</div>;
}

export default IconMaker;
