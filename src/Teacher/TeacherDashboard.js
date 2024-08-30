import React, { useState } from 'react';
import './TeacherDashboard.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import Result from './Result';
import Dashboard from './Dashboard';
import Subjects from './Subjects';
import Profile from '../Components/Profile';
import Preferences from '../Components/Preferences';
import EditProfile from '../Components/EditProfile';
import SubjectDashboard from './SubjectDashboard';
import UploadVideoForm from '../Components/UploadVideoForm';
import EditSubjectDetails from '../Components/EditSubjectDetails';
import EditTopicDetails from '../Components/EditTopicDetails';
import SubjectTable from '../Components/SubjectTable';
import Leave from '../Components/Leave';
import UpdateVideoForm from '../Components/UpdateVideoForm';


const subjectsData = [
  { id: 'algebra', title: 'Algebra' },
  { id: 'geometry', title: 'Geometry' },
  { id: 'physics', title: 'Physics' },
  { id: 'chemistry', title: 'Chemistry' },
  { id: 'history', title: 'History' },
  { id: 'geography', title: 'Geography' },
];

// Sample data for standards, divisions, and teachers
const standardsData = ['Standard 1', 'Standard 2', 'Standard 3'];
const divisionsData = ['A', 'B', 'C'];
const teachersData = ['Teacher 1', 'Teacher 2', 'Teacher 3'];

const TeacherDashboard = () => {
  // State hooks
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');
  const [showAddSubjectForm, setShowAddSubjectForm] = useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle sidebar item click
  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
    setShowAddSubjectForm(false);
  };

  const handleSubjectCardClick = (subjectId) => {
    setSelectedComponent(`Subject-${subjectId}`);
  };

  const handleProfileClick = () => {
    setSelectedComponent('Profile');
  };

  const handleDashboardLinkClick = () => {
    setSelectedComponent('Dashboard');
  };

  const handleSubjectLinkClick = () => {
    setSelectedComponent('Subjects');
  };

  const handleGroupsClick = () => {
    setSelectedComponent('Groups');
  };

  const handlePreferenceClick = () => {
    setSelectedComponent('Preferences');
  };

  const handleEditProfileClick = () => {
    setSelectedComponent('EditProfile');
  };

  const handleSubjectClick = (subjectId) => {
    setSelectedComponent(`Subject-${subjectId}`);
  };
  const handleVideoClick = () => {
    setSelectedComponent('UploadVideoForm');
  };
  const handleUpdateClick = () => {
    setSelectedComponent('UpdateVideoForm');
  };
  const handleTurnEditing = () => {
    setSelectedComponent('EditSubjectDetails');
  };

  const handleEditTopic = () => {
    setSelectedComponent('EditTopicDetails');
  };

  const handleDashboardClick = () => {
    setSelectedComponent('Dashboard');
  };
  const handleSubTableClick = () => {
    setSelectedComponent('SubjectTable')
  };
  const handleCalenderClick = () => {
    setSelectedComponent('Calendar')
  };

  const handleLeaveClick = () => {
    setSelectedComponent('Leave')
  };




  // Toggle Add Subject form visibility
  const toggleAddSubjectForm = () => {
    setShowAddSubjectForm(!showAddSubjectForm);
  };

  // Toggle Change Password form visibility
  const toggleChangePasswordForm = () => {
    setShowChangePasswordForm(!showChangePasswordForm);
  };

  // Render component based on selected component state
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard subjects={subjectsData} onSubjectClick={handleSubjectCardClick} />;
      case 'Calendar':
        return <Calendar />;
      case 'Leave':
        return <Leave />;
      case 'Subjects':
        return <Subjects subjects={subjectsData} onSubjectCardClick={handleSubjectCardClick} />;
      case 'Result':
        return <Result />;
      case 'Profile':
        return <Profile onEditProfileClick={handleEditProfileClick} onDashboard={handleDashboardClick} />;
      case 'Preferences':
        return <Preferences onEditProfileClick={handleEditProfileClick} onDashboard={handleDashboardClick} />;
      case 'EditProfile':
        return <EditProfile onDashboard={handleDashboardClick} />;

      case `Subject-${selectedComponent.split('-')[1]}`:
        return <SubjectDashboard name={selectedComponent.split('-')[1]} onVideoClick={handleVideoClick} onUpdateClick={handleUpdateClick} onTurnEditing={handleTurnEditing} onDashboard={handleDashboardClick} onSubTable={handleSubTableClick} onCalender={handleCalenderClick} />;

      case 'UploadVideoForm':
        return <UploadVideoForm />
      case 'UpdateVideoForm':
        return <UpdateVideoForm />

      case 'EditSubjectDetails':
        return <EditSubjectDetails onEditTopic={handleEditTopic} onDashboard={handleDashboardClick} />
      case 'EditTopicDetails':
        return <EditTopicDetails onDashboard={handleDashboardClick} />
      case 'SubjectTable':
        return <SubjectTable />

      default:
        return <Dashboard subjects={subjectsData} onSubjectClick={handleSubjectCardClick} />;
    }
  };

  return (
    <div className={`student-dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Header component with toggle sidebar function */}
      <Header
        onToggleSidebar={toggleSidebar}
        onChangePasswordClick={toggleChangePasswordForm}
        onProfileClick={handleProfileClick}
        onPreferencesClick={handlePreferenceClick}
        onEditProfileClick={handleEditProfileClick}
        onDashboard={handleDashboardClick}
      />

      {/* Sidebar component with necessary props */}
      <Sidebar
        isOpen={sidebarOpen}
        onItemClick={handleSidebarItemClick}
        selectedComponent={selectedComponent}
        onAddSubjectClick={toggleAddSubjectForm} // Pass toggle function to open Add Subject form
      />

      {/* Main content container with dynamically rendered component */}
      <div className="content-container">
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default TeacherDashboard;
