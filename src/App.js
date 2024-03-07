// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function AttendanceTracker() {
  const [attendance, setAttendance] = useState(0);

  const handleIncrement = () => {
    setAttendance(attendance + 1);
  };

  const handleDecrement = () => {
    setAttendance(attendance - 1);
  };

  const handleReset = () => {
    setAttendance(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <p>Group 4's Attendance: {attendance}</p>
        <button onClick={handleIncrement}>Mark Attendance</button>
        <br />
        <button onClick={handleDecrement}>Cancel Attendance</button>
        <br />
        <button onClick={handleReset}>Reset Attendance</button>
      </header>
    </div>
  );
}

export default AttendanceTracker;
