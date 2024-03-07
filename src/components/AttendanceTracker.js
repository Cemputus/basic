// AttendanceTracker.js
import React, { useState } from 'react';

function AttendanceTracker() {
  const [attendance, setAttendance] = useState(0);
  const [attendanceInput, setAttendanceInput] = useState('');
  const [studentData, setStudentData] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [telephoneInput, setTelephoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const handleIncrement = () => {
    setAttendance(attendance + 1);
  };

  const handleDecrement = () => {
    setAttendance(attendance - 1);
  };

  const handleReset = () => {
    setAttendance(0);
  };

  const handleAttendanceInputChange = (event) => {
    setAttendanceInput(event.target.value);
  };

  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleTelephoneInputChange = (event) => {
    setTelephoneInput(event.target.value);
  };

  const handleEmailInputChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const parsedInput = parseInt(attendanceInput, 10);

    if (!isNaN(parsedInput)) {
      setAttendance(attendance + parsedInput);

      // Save user data
      const newStudentData = [...studentData, { name: nameInput, telephone: telephoneInput, email: emailInput }];
      setStudentData(newStudentData);

      // Reset input fields
      setAttendanceInput('');
      setNameInput('');
      setTelephoneInput('');
      setEmailInput('');
    }
  };

  return (
    <div>
      <p>Group 4's Attendance: {attendance}</p>

      {/* Form for data entry */}
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter Attendance:
          <input
            type="number"
            value={attendanceInput}
            onChange={handleAttendanceInputChange}
          />
        </label>
        <br />
        <label>
          Enter Student Name:
          <input
            type="text"
            value={nameInput}
            onChange={handleNameInputChange}
          />
        </label>
        <br />
        <label>
          Enter Telephone:
          <input
            type="tel"
            value={telephoneInput}
            onChange={handleTelephoneInputChange}
          />
        </label>
        <br />
        <label>
          Enter Email:
          <input
            type="email"
            value={emailInput}
            onChange={handleEmailInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Display user data and attendance */}
      <div>
        <h2>Student Data:</h2>
        <ul>
          {studentData.map((student, index) => (
            <li key={index}>{`Name: ${student.name}, Telephone: ${student.telephone}, Email: ${student.email}`}</li>
          ))}
        </ul>
      </div>

      {/* Buttons for marking, canceling, and resetting attendance */}
      <button onClick={handleIncrement}>Mark Attendance</button>
      <br />
      <button onClick={handleDecrement}>Cancel Attendance</button>
      <br />
      <button onClick={handleReset}>Reset Attendance</button>
    </div>
  );
}

export default AttendanceTracker;
