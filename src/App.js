import React, { useState } from 'react';
import MeditationImage from "./components/MeditationImage";
import "./App.css";
import ah_hum_om_medium from "./assets/ah_hum_om_medium.gif";
import MeditationTimer from "./components/Timer";
import Settings from "./components/Settings";

function App() {
  const [time, setTime] = useState(2400000);

  return (
    <div className="App">
      <MeditationImage selectedImage={ah_hum_om_medium}></MeditationImage>
      <MeditationTimer time={time}></MeditationTimer>
      <Settings setTime={(timeArg) => { setTime(timeArg) }}></Settings>
    </div>
  );
}

export default App;
