import React, { useState, useEffect } from 'react';
import IconMaker from '../components/IconMaker.jsx';
import BasicExample from '../components/ProgressBar.jsx';

// declare MainContainer function
const MainContainer = (props) => {
  /* do we declare state here and prop drill down or at IconMaker?? */
  // return out the HTML elements
  return (
    <div className="main" id="mainContainer">
      <IconMaker 
        codes={props.codes}/>
    </div>
  );
};

export default MainContainer;
