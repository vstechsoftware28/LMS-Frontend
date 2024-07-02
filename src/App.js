import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import StudentDashboard from './school/student/StudentDashboard';
import Calendar from './school/student/Calendar';
import RegistrationFormClgSchool from './Components/RegistrationFormClgSchool';
import RegistrationForm from './Components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="calendar" element={<Calendar/>}/>
        {/* <Route path="/" element={<RegistrationFormClgSchool/>}/> */}
          {/* <Route path="/" element={<StudentDashboard/>} /> */}
          {/* <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
