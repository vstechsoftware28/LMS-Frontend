// StudentDashboard.js
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import Subjects from './Subjects';
import Result from './Result';
import Modal from '../Modal';
import AddSubjectForm from './AddSubjectForm';
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
  { name: 'Physics', standard: '10th', division: 'A', image: 'path/to/physics.jpg' },
  { name: 'Chemistry', standard: '10th', division: 'A', image: 'path/to/chemistry.jpg' },
  { name: 'Maths', standard: '10th', division: 'B', image: 'path/to/maths.jpg' },
  { name: 'Biology', standard: '10th', division: 'B', image: 'path/to/biology.jpg' },
  { name: 'History', standard: '9th', division: 'A', image: 'path/to/history.jpg' },
  { name: 'Geography', standard: '9th', division: 'A', image: 'path/to/geography.jpg' },
  { name: 'Literature', standard: '9th', division: 'B', image: 'path/to/literature.jpg' },
  { name: 'Art', standard: '9th', division: 'B', image: 'path/to/art.jpg' },
  { name: 'Music', standard: '8th', division: 'A', image: 'path/to/music.jpg' },
  { name: 'Computer Science', standard: '8th', division: 'A', image: 'path/to/computer_science.jpg' },
  { name: 'Economics', standard: '8th', division: 'B', image: 'path/to/economics.jpg' }
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

  const handleSubjectCardClick = (subjectName) => {
    console.log('Navigating to subject:', subjectName);
    setSelectedComponent(`Subject-${subjectName}`);
  };

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Calendar':
        return <Calendar />;
      case 'Subjects':
        return <Subjects subjects={subjectsData} onSubjectCardClick={handleSubjectCardClick} />;
      case 'Result':
        return <Result />;
      default:
        // Handle individual subject pages
        if (selectedComponent.startsWith('Subject-')) {
          const subjectName = selectedComponent.split('-')[1];
          const subject = subjectsData.find((s) => s.name === subjectName);
          return <div>{subjectName} Page: Details of {subject ? subject.name : 'Subject'}</div>;
        }
        return <Dashboard />;
    }
  };

  return (
    <StudentDashboardContainer sidebarOpen={sidebarOpen}>
      <Header onToggleSidebar={toggleSidebar} />
      <Sidebar 
        isOpen={sidebarOpen} 
        onItemClick={handleSidebarItemClick} 
        selectedComponent={selectedComponent}
        onAddSubjectClick={handleAddSubjectClick} // Passing handleAddSubjectClick to Sidebar
        subjects={subjectsData} // Passing subjects to Sidebar
      />
      <ContentContainer>
        {renderSelectedComponent()}
      </ContentContainer>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <AddSubjectForm 
          subjects={subjectsData.map(subject => subject.name)} 
          standards={['1', '2', '3']} // Example standards
          divisions={['A', 'B', 'C']} // Example divisions
          teachers={['Mr. A', 'Ms. B', 'Mrs. C']} // Example teachers
          onSubmit={handleAddSubjectSubmit} 
        />
      </Modal>
    </StudentDashboardContainer>
  );
};

export default StudentDashboard;
