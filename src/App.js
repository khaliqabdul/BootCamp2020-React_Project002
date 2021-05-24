//import logo from './logo.svg';
import GlowingLamp from './GlowingLamp.jpeg';
import darkSky from './darkSky.png';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [lit, setLit] = useState(true);
  const [time, setTime] = useState(getTime());

  function getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() > 12 ? "pm" : "am"
    }
  }
  const { hours, minutes, seconds, ampm } = time;

  const updateTime = () => setTime(getTime);
  setInterval(updateTime, 1000);


  const glowImg = <img className="lamp" src={GlowingLamp} alt="lamp" />
  const darkImg = <img className="night" src={darkSky} alt="stars" />
  
  
  return (
    <div className="App">
      <header className="App-header">
        <span><h1>The Room is {lit ? "Lit" : "Dark"}</h1></span>
        <span className="clock">
            {hours === 0 ? 12 : hours > 12 ? `0${hours - 12}` : hours < 10 ? `0${hours}` : hours} : {
            minutes <= 9 ? `0${minutes}` : minutes} : {
            seconds <= 9 ? `0${seconds}` : seconds} {ampm}
        </span>
        <span>
          <button onClick={()=> setLit(true)}>ON</button>
          <button onClick={()=>setLit(false)}>OFF</button>
        </span>
      </header>
      <div className={`room ${lit ? "lit" : "dark"}`}>
        {lit ? glowImg : darkImg}
        <h1 className="clock2">
            {hours === 0 ? 12 : hours > 12 ? `0${hours - 12}` : hours < 10 ? `0${hours}` : hours} : {
            minutes <= 9 ? `0${minutes}` : minutes} : {
            seconds <= 9 ? `0${seconds}` : seconds} {ampm}
        </h1>
        <p>Developed By: Abdul khaliq</p>
      </div>
    </div>
  );
}

export default App;
