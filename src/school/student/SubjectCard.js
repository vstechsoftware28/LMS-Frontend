import React from 'react';
import './SubjectCard.css'; // Ensure your CSS file is correctly imported

const SubjectCard = ({ subject, onClick }) => (
  <div className="subject-card" onClick={() => onClick(subject.id)}>
    <img className="subject-image" src={subject.image} alt={subject.name} />
    <div className="text-container">
      <div className="standard-division">{subject.standard} {subject.division}</div>
      <div className="subject-name">{subject.name}</div>
    </div>
  </div>
);

const subjectsData = [
  { id: 'algebra', name: 'Algebra', standard: '10th', division: 'A', image: 'path/to/Algebra.jpg' },
  { id: 'geometry', name: 'Geometry', standard: '10th', division: 'A', image: 'path/to/Geometry.jpg' },
  { id: 'physics', name: 'Physics', standard: '10th', division: 'A', image: 'path/to/Physics.jpg' },
  { id: 'chemistry', name: 'Chemistry', standard: '10th', division: 'A', image: 'path/to/Chemistry.jpg' },
  { id: 'history', name: 'History', standard: '10th', division: 'A', image: 'path/to/history.jpg' },
  { id: 'geography', name: 'Geography', standard: '10th', division: 'A', image: 'path/to/geography.jpg' }
];

export default SubjectCard;
export { subjectsData };
