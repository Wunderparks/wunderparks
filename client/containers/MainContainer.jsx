import React, { useState, useEffect } from 'react';
import IconMaker from '../components/IconMaker.jsx';

// declare MainContainer function
const MainContainer = () => {
  /* do we declare state here and prop drill down or at IconMaker?? */

  // return out the HTML elements
  return (
    <div className="main" id="mainContainer">
      <IconMaker />
    </div>
  );
};

export default MainContainer;
