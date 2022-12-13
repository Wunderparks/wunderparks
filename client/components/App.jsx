import React, { useEffect, useState, useLayoutEffect } from "react";
import SidebarContainer from "../containers/SidebarContainer.jsx";
import MainContainer from "../containers/MainContainer.jsx";

const App = () => {
  // let codes = [];
  const [codes, setCodes] = useState([]);

  const handleUpdate = (newData) => {
    setData([newData, ...data]);
  };

  useEffect(() => {
    fetch("http://localhost:3000/user/", {
      method: "GET",
      headers: { "Content-Type": "Application/JSON" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCodes(data);
      })
      .catch((err) => console.log("AddPark fetch POST to api: ERROR: ", err));
  }, []);

  return (
    <div className='app'>
      <SidebarContainer codes={codes} />
      <div className='right'>
        <div className='float'>
          <h1> WÜNDER PARKS</h1>
        </div>
        <MainContainer codes={codes} />
      </div>
    </div>
  );
};

export default App;
