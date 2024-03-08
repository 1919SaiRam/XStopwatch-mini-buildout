import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <span>{formatTime(time)}</span>
      </div>
      <div>
        <button onClick={startStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
