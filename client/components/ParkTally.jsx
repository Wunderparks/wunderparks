import React, { _useEffect, useState } from 'react';
import parkcodes from '../public/parkcodes.js';
// import

const ParkTally = (props) => {
  const parksVisited = [];
  //  iterate through the parkcodes js file
  for (let park in parkcodes) {
    const { codes } = props;
    if (codes.includes(parkcodes[park])) {
      parksVisited.push(<li className="visited_item">{park}</li>);
    }
  }

  return (
    <div className="parkTally">
      <ul className="visited_list">
        <h2>Parks Visited: {parksVisited.length}/63</h2>
        <div className="listItems">{parksVisited}</div>
      </ul>
    </div>
  );
};

export default ParkTally;
