import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Calendar from './Calendar';
import Result from './Result';
import Modal from '../../Modal';
import AddSubjectForm from './AddSubjectForm';
import Dashboard from './Dashboard';
import Subjects from './Subjects';
import Algebra from './subjects/Algebra';
import Geometry from './subjects/Geometry';
import Physics from './subjects/Physics';
import Chemistry from './subjects/Chemistry';
import History from './subjects/History';
import Geography from './subjects/Geography';
import Groups from './Groups';
import styled from 'styled-components';

const StudentDashboardContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main';
  grid-template-columns: ${({ sidebarOpen }) => (sidebarOpen ? '250px' : '60px')} 1fr;
  grid-template-rows: 60px 1fr; /* Adjust based on header height */
  height: 100vh;
`;

const ContentContainer = styled.div`
  grid-area: main;
  padding: 1rem;
  overflow-y: auto;
  background-color: #f9f9f9; /* Optional: Adding a background color */
`;

const subjectsData = [
  { id: 'algebra', title: 'Algebra', component: <Algebra /> },
  { id: 'geometry', title: 'Geometry', component: <Geometry /> },
  { id: 'physics', title: 'Physics', component: <Physics /> },
  { id: 'chemistry', title: 'Chemistry', component: <Chemistry /> },
  { id: 'history', title: 'History', component: <History /> },
  { id: 'geography', title: 'Geography', component: <Geography /> },
];

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  const handleAddSubjectClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddSubjectSubmit = (formData) => {
    console.log('Form Data:', formData);
    // Handle form submission logic here
    setIsModalOpen(false);
  };

  const handleSubjectCardClick = (subjectId) => {
    setSelectedComponent(`Subject-${subjectId}`);
  };

  const handleGroupsClick = () => {
    setSelectedComponent('Groups');
  };

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
        return <Groups/>
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
    <StudentDashboardContainer sidebarOpen={sidebarOpen}>
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar 
        isOpen={sidebarOpen} 
        onItemClick={handleSidebarItemClick} 
        selectedComponent={selectedComponent}
        onAddSubjectClick={handleAddSubjectClick}
        subjects={subjectsData}
      />
      <ContentContainer>
        {renderSelectedComponent()}
      </ContentContainer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <AddSubjectForm 
          subjects={subjectsData.map(subject => subject.title)} 
          onSubmit={handleAddSubjectSubmit} 
        />
      </Modal>
    </StudentDashboardContainer>
  );
};

export default StudentDashboard;
