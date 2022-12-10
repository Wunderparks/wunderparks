import React, { useEffect, useState } from 'react';


function App() {
  return (
    <div classname="body">
      <Sidebar />

      <div className="container">
        {!isLoaded && <p>Loading...</p>}
        {isLoaded && data.map(IconMaker)}
      </div>
    </div>
  );
}
