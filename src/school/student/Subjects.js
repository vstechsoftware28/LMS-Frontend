import React from 'react';
import './Subjects.css'; // Import CSS file for traditional styling
import SubjectCard from './SubjectCard';

const subjectsData = [
  { id: 'algebra', name: 'Algebra', standard: '10th', division: 'A', image: 'path/to/Algebra.jpg' },
  { id: 'geometry', name: 'Geometry', standard: '10th', division: 'A', image: 'path/to/Geometry.jpg' },
  { id: 'physics', name: 'Physics', standard: '10th', division: 'B', image: 'path/to/Physics.jpg' },
  { id: 'chemistry', name: 'Chemistry', standard: '10th', division: 'B', image: 'path/Chemistry.jpg' },
  { id: 'history', name: 'History', standard: '9th', division: 'A', image: 'path/to/history.jpg' },
  { id: 'geography', name: 'Geography', standard: '9th', division: 'A', image: 'path/to/geography.jpg' }
];

const Subjects = ({ onSubjectCardClick }) => {
  return (
    <div>
      <h2 className="section-heading">Subjects</h2>
      <div className="subjects-container">
        {subjectsData.map((subject, index) => (
          <SubjectCard key={index} subject={subject} onClick={onSubjectCardClick} />
        ))}
      </div>
    </div>
  );
};

export default Subjects;
