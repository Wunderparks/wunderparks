import React, { useState, useEffect } from 'react';
import Modal from './modal/modal.jsx';

const Icon = (iconData) => {

  const [show, setShow] = React.useState(false);
  const [parkName, setName] = React.useState(iconData.park);
  const [parkCode, setCode] = React.useState(iconData.parkCode);

  return (

    <div>
      <img
        src={iconData.imgLink}
        id={iconData.park}
        className={`${iconData.className} imageIcon`}
        onClick={(e) => {

          setShow(true);
        }}
      />
      <Modal
        onClose={() => setShow(false)}
        show={show}
        parkName={parkName}
        parkCode={parkCode}
      />
    </div>
  );

  // we also need an onclick handler
  //
};

// export out the MainContainer
export default Icon;
