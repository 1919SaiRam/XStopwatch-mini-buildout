// Stopwatch.jsx
import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1000); // Advance time by 1 second
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`;
  };

  return (
    <div className="stopwatch">
      <div className="time">Time: {formatTime()}</div>
      {!isRunning ? (
        <button onClick={startStopwatch}>Start</button>
      ) : (
        <button onClick={stopStopwatch}>Stop</button>
      )}
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
