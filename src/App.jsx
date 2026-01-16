import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

/**
 * App Component - Eragondevs Dynamic Color Clock
 * 
 * Functionality: Displays a real-time digital clock with dynamic date and time.
 * Logic: Uses useState to track the current date and useEffect with setInterval 
 * to update the time every second. Formats the output using date-fns.
 */
function App() {
  // State to hold the current date and time
  const [currentTime, setCurrentTime] = useState(new Date());

  // Effect to set up a timer that updates every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <div className="glass-card">
        <header className="clock-header">
          <h1>Eragondevs Clock</h1>
        </header>
        <main className="clock-face">
          <p className="time-display">
            {format(currentTime, "HH:mm:ss")}
          </p>
          <p className="date-display">
            {format(currentTime, "EEEE, MMMM do, yyyy")}
          </p>
        </main>
        <footer className="clock-footer">
          <p>Precision is Perfection</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
