import React, { useState } from "react";
import "./App.css";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const state = useState();
  const [getTime, setTime] = useState(time);

  const UpdatedTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(UpdatedTime, 1000);

  return (
    <div className="App">
      <h1> {getTime} </h1>
    </div>
  );
};

export default App;
