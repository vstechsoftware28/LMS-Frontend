import React, { useState } from 'react';
import './TeacherDashboard.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import Result from './Result';
import AddSubjectForm from './AddSubjectForm'; // Import AddSubjectForm component
import Dashboard from './Dashboard';
import Subjects from './Subjects';
import Profile from '../Components/Profile';
import Preferences from '../Components/Preferences';
import EditProfile from '../Components/EditProfile';
import SubjectDashboard from './SubjectDashboard';
import UploadVideoForm from '../Components/UploadVideoForm';
import EditSubjectDetails from '../Components/EditSubjectDetails';
import EditTopicDetails from '../Components/EditTopicDetails';

// Define subject data with id, title, and component
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
  const [sidebarOpen, setSidebarOpen] = useState(true); // State for sidebar open/close
  const [selectedComponent, setSelectedComponent] = useState('Dashboard'); // State for selected component
  const [showAddSubjectForm, setShowAddSubjectForm] = useState(false); // State for Add Subject form visibility
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false); // State for Change Password form visibility

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle sidebar item click
  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
    setShowAddSubjectForm(false); // Close Add Subject form when switching sidebar items
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
    setSelectedComponent('UploadVideoForm')
  }

  const handleTurnEditing = () => {
    setSelectedComponent('EditSubjectDetails')
  }

  const handleEditTopic = () => {
    setSelectedComponent('EditTopicDetails')
  }
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
      case 'Subjects':
        return <Subjects subjects={subjectsData} onSubjectCardClick={handleSubjectCardClick} />;
      case 'Result':
        return <Result />;
      case 'Profile':
        return <Profile onEditProfileClick={handleEditProfileClick} />;
      case 'Preferences':
        return <Preferences onEditProfileClick={handleEditProfileClick} />;
      case 'EditProfile':
        return <EditProfile />;

      case `Subject-${selectedComponent.split('-')[1]}`:
        return <SubjectDashboard name={selectedComponent.split('-')[1]} onVideoClick={handleVideoClick} onTurnEditing={handleTurnEditing} />;

      case 'UploadVideoForm':
        return <UploadVideoForm />

      case 'EditSubjectDetails':
        return <EditSubjectDetails onEditTopic={handleEditTopic}/>
        case 'EditTopicDetails':
          return <EditTopicDetails />
      default:
        return <Dashboard subjects={subjectsData} onSubjectClick={handleSubjectCardClick} />;
    }
  };

  return (
    <div className={`student-dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Header component with toggle sidebar function */}
      <Header
        onToggleSidebar={toggleSidebar}
        onChangePasswordClick={toggleChangePasswordForm} // Pass toggle function to open Change Password form
        onProfileClick={handleProfileClick}
        onPreferencesClick={handlePreferenceClick}
        onEditProfileClick={handleEditProfileClick}
        onVideoClick={handleVideoClick}
        onTurnEditing={handleTurnEditing}
        onEditTopic={handleEditTopic}
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
