import React, { useState, useEffect } from 'react';
import SubjectCard, { subjectsData } from './SubjectCard'; 
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = ({ onSubjectCardClick }) => {
  const [notices, setNotices] = useState([
    'Notice 1: It\'s a holiday',
    'Notice 2: It\'s a Monday',
    'Notice 3: Holiday Holiday Holiday'
  ]);

  const [recentlyAccessedSubjects] = useState([
    { id: 'algebra', name: 'Algebra', standard: '10th', division: 'A', image: 'path/to/Algebra.jpg' },
    { id: 'chemistry', name: 'Chemistry', standard: '10th', division: 'B', image: 'path/to/Chemistry.jpg' },
    { id: 'physics', name: 'Physics', standard: '10th', division: 'B', image: 'path/to/Physics.jpg' }
  ]);

  const [showAllSubjects, setShowAllSubjects] = useState(false);

  const handleToggleSubjects = () => {
    setShowAllSubjects(!showAllSubjects);
  };

  const subjectsToShow = showAllSubjects ? subjectsData : subjectsData.slice(0, 4);

  return (
    <div className="dashboard-container">
      <div className="scroll-container">
        <div className="notices-container">
          <div className="notices">
            {notices.map((notice, index) => (
              <div className="notice" key={index}>{notice}</div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="section-header">
          <h2 className="section-heading">Recently Accessed Subjects</h2>
        </div>
        <div className="recently-accessed-container">
          {recentlyAccessedSubjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} onClick={onSubjectCardClick} />
          ))}
        </div>
      </div>

      <div>
        <div className="section-header">
          <h2 className="section-heading">Subjects Overview</h2>
        </div>
        <div className="subjects-container">
          {subjectsToShow.map((subject, index) => (
            <SubjectCard key={index} subject={subject} onClick={onSubjectCardClick} />
          ))}
        </div>
        <div className="toggle-button" onClick={handleToggleSubjects}>
          {showAllSubjects ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
