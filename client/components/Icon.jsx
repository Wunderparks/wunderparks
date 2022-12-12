import React, { useState, useEffect } from 'react';
import Modal from './modal/modal.jsx';

const Icon = (iconData) => {
  /* do we declare state here and prop drill down or at IconMaker?? */

  // return out the HTML elements

  // add the modal component
  // function modal() {
  //   return
  // }

  // console.log(iconData)
  // render a button that is the image value of the images object

  const [show, setShow] = React.useState(false);
  const [parkName, setName] = React.useState(iconData.park);
  const [parkCode, setCode] = React.useState(iconData.parkCode);

  return (
    //   <button
    //     className=''
    //     id=''
    //     onClick={() => {modal}}>
    <div>
      <img
        src={iconData.imgLink}
        id={iconData.park}
        onClick={(e) => {
          console.log('image clicked');
          console.log('parkCode is ', iconData.parkCode);
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
    //   </button>
  );

  // we also need an onclick handler
  //
};

// export out the MainContainer
export default Icon;
