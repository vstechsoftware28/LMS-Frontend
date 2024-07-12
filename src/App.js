import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import TeacherDashboard from './Teacher/TeacherDashboard';
import Calendar from './Teacher/Calendar';
import RegistrationFormClgSchool from './Components/RegistrationFormClgSchool';
import RegistrationForm from './Components/RegistrationForm';
import SubjectForm from './Components/Subject-Form';
import SubjectTable from './Components/SubjectTable';
import UploadVideoForm from './Components/UploadVideoForm';
import SubjectDashboard from './Teacher/SubjectDashboard';
import Popup from './Components/Popup';
import Profile from './Components/Profile';
import Preferences from './Components/Preferences';
import SetCal from './Components/SetCal';
import EditProfile from './Components/EditProfile';
import SubjectDetails from './Components/SubjectDetails';
import EditSubjectDetails from './Components/EditSubjectDetails';
import EditTopicDetails from './Components/EditTopicDetails';
import ConfirmModal from './Teacher/ConfirmModal';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        <Route path="/" element={<TeacherDashboard/>} />
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/reg" element={<RegistrationFormClgSchool/>}/>
          {/* <Route path="/" element={<StudentDashboard/>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path='/subject-form' element={<SubjectForm />} />
          <Route path='/subject-table' element={<SubjectTable />} />
          <Route path='/video-form' element={<UploadVideoForm />} />
          <Route path="/subject/:name" element={<SubjectDashboard />} />
          <Route path='/popup' element={<Popup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/preferences' element={<Preferences />} />
          <Route path='/cal' element={<SetCal />} />
          <Route path='/edit-profile' element={<EditProfile />} />
          <Route path='/subject-details' element={<SubjectDetails />} />
          <Route path='/edit-subject-details' element={<EditSubjectDetails />} />
          <Route path='/edit-topic-details' element={<EditTopicDetails />} />
          <Route path='/confirm-modal' element={<ConfirmModal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
