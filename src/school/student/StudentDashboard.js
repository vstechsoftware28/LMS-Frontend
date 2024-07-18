import React, { useState } from 'react';
import './StudentDashboard.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import Result from './Result';
import AddSubjectForm from './AddSubjectForm'; // Import AddSubjectForm component
import ChangePasswordForm from './ChangePasswordForm'; // Import ChangePasswordForm component
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

// Sample data for standards, divisions, and teachers
const standardsData = ['Standard 1', 'Standard 2', 'Standard 3'];
const divisionsData = ['A', 'B', 'C'];
const teachersData = ['Teacher 1', 'Teacher 2', 'Teacher 3'];

const StudentDashboard = () => {
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

  const handleDashboardLinkClick = () => {
    setSelectedComponent('Dashboard');
  };

  const handleCalendarLinkClick = () => {
    setSelectedComponent('Calendar');
  };

  const handleSubjectLinkClick = () => {
    setSelectedComponent('Subjects');
  };

  const handleGroupsClick = () => {
    setSelectedComponent('Groups');
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
        return <Dashboard subjects={subjectsData} onSubjectCardClick={handleSubjectCardClick} />;
      case 'Calendar':
        return <Calendar />;
      case 'Subjects':
        return <Subjects subjects={subjectsData} onSubjectCardClick={handleSubjectCardClick} />;
      case 'Result':
        return <Result />;
      case 'Subject-algebra':
        return <Algebra onGroupsClick={handleGroupsClick} onDashboardLinkClick={handleDashboardLinkClick} onSubjectLinkClick={handleSubjectLinkClick}  />;
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
        onChangePasswordClick={toggleChangePasswordForm} // Pass toggle function to open Change Password form
        onCalendarLinkClick={handleCalendarLinkClick}
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

      {/* Add Subject Form */}
      {showAddSubjectForm && (
        <div className="centered-form-container">
          <AddSubjectForm 
            onClose={() => setShowAddSubjectForm(false)} // Close form on form submission or cancel
            standards={standardsData} 
            divisions={divisionsData} 
            teachers={teachersData} 
          />
        </div>
      )}

      {/* Change Password Form */}
      {showChangePasswordForm && (
        <div className="centered-form-container">
          <ChangePasswordForm 
            onClose={() => setShowChangePasswordForm(false)} // Close form on form submission or cancel
          />
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
