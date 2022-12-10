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
      <
    </div>
  )
}