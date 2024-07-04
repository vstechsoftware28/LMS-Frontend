import React, { useState } from 'react';
import './StudentDashboard.css'; // Import your CSS file
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import Result from './Result';
import Modal from '../../Modal';
import AddSubjectForm from './AddSubjectForm';
import ChangePasswordForm from './ChangePasswordForm';
import Dashboard from './Dashboard';
import Subjects from './Subjects';
import Algebra from './subjects/Algebra';
import Geometry from './subjects/Geometry';
import Physics from './subjects/Physics';
import Chemistry from './subjects/Chemistry';
import History from './subjects/History';
import Geography from './subjects/Geography';
import Groups from './Groups';

// Define subject data with id, title, and component
const subjectsData = [
  { id: 'algebra', title: 'Algebra', component: <Algebra /> },
  { id: 'geometry', title: 'Geometry', component: <Geometry /> },
  { id: 'physics', title: 'Physics', component: <Physics /> },
  { id: 'chemistry', title: 'Chemistry', component: <Chemistry /> },
  { id: 'history', title: 'History', component: <History /> },
  { id: 'geography', title: 'Geography', component: <Geography /> },
];

const StudentDashboard = () => {
  // State hooks
  const [sidebarOpen, setSidebarOpen] = useState(true); // State for sidebar open/close
  const [selectedComponent, setSelectedComponent] = useState('Dashboard'); // State for selected component
  const [isAddSubjectModalOpen, setIsAddSubjectModalOpen] = useState(false); // State for add subject modal open/close
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false); // State for change password modal open/close

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle sidebar item click
  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  // Open modal for adding subject
  const handleAddSubjectClick = () => {
    setIsAddSubjectModalOpen(true);
  };

  // Close modal for adding subject
  const handleAddSubjectModalClose = () => {
    setIsAddSubjectModalOpen(false);
  };

  // Handle form submission for adding subject
  const handleAddSubjectSubmit = (formData) => {
    console.log('Form Data:', formData);
    // Handle form submission logic here
    setIsAddSubjectModalOpen(false); // Close modal after submission
  };

  // Open modal for changing password
  const handleChangePasswordClick = () => {
    setIsChangePasswordModalOpen(true);
  };

  // Close modal for changing password
  const handleChangePasswordModalClose = () => {
    setIsChangePasswordModalOpen(false);
  };

  // Handle form submission for changing password
  const handleChangePasswordSubmit = (formData) => {
    console.log('Password Change Data:', formData);
    // Handle password change logic here
    setIsChangePasswordModalOpen(false); // Close modal after submission
  };

  // Handle click on subject card
  const handleSubjectCardClick = (subjectId) => {
    setSelectedComponent(`Subject-${subjectId}`);
  };

  // Handle click on groups
  const handleGroupsClick = () => {
    setSelectedComponent('Groups');
  };

  const handleDashboardLinkClick = () => {
    setSelectedComponent('Dashboard');
  };

  // Render component based on selected component state
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard subjects={subjectsData} onSubjectCardClick={handleSubjectCardClick} />;
      case 'Calendar':
        return <Calendar />;
      case 'Subjects':
        return <Subjects subjects={subjectsData} onSubjectCardClick={handleSubjectCardClick} />;
      case 'Result':
        return <Result />;
      case 'Subject-algebra':
        return <Algebra onGroupsClick={handleGroupsClick} />;
      case 'Groups':
        return <Groups />;
      case 'Subject-geometry':
        return <Geometry />;
      case 'Subject-physics':
        return <Physics />;
      case 'Subject-chemistry':
        return <Chemistry />;
      case 'Subject-history':
        return <History />;
      case 'Subject-geography':
        return <Geography />;
      default:
        return <Dashboard subjects={subjectsData} onSubjectCardClick={handleSubjectCardClick} />;
    }
  };

  return (
    <div className={`student-dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Header component with toggle sidebar function */}
      <Header 
        onToggleSidebar={toggleSidebar}
        onChangePasswordClick={handleChangePasswordClick}
      />

      {/* Sidebar component with necessary props */}
      <Sidebar
        isOpen={sidebarOpen}
        onItemClick={handleSidebarItemClick}
        selectedComponent={selectedComponent}
        onAddSubjectClick={handleAddSubjectClick}
        subjects={subjectsData}
      />
      {/* Main content container with dynamically rendered component */}
      <div className="content-container">
        {renderSelectedComponent()}
      </div>
      {/* Modal for adding subjects */}
      {isAddSubjectModalOpen && (
        <Modal onClose={handleAddSubjectModalClose}>
          <AddSubjectForm onSubmit={handleAddSubjectSubmit} />
        </Modal>
      )}
      {/* Modal for changing password */}
      {isChangePasswordModalOpen && (
        <Modal onClose={handleChangePasswordModalClose}>
          <ChangePasswordForm onSubmit={handleChangePasswordSubmit} />
        </Modal>
      )}
    </div>
  );
};

export default StudentDashboard;
