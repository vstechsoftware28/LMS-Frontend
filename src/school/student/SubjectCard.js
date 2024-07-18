import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import './SubjectCard.css';

const subjectsData = [
  { id: 'algebra', name: 'Algebra', standard: '10th', division: 'A', image: 'path/to/Algebra.jpg', completion: 75 },
  { id: 'geometry', name: 'Geometry', standard: '10th', division: 'A', image: 'path/to/Geometry.jpg', completion: 60 },
  { id: 'physics', name: 'Physics', standard: '10th', division: 'A', image: 'path/to/Physics.jpg', completion: 80 },
  { id: 'chemistry', name: 'Chemistry', standard: '10th', division: 'A', image: 'path/to/Chemistry.jpg', completion: 85 },
  { id: 'history', name: 'History', standard: '10th', division: 'A', image: 'path/to/history.jpg', completion: 90 },
  { id: 'geography', name: 'Geography', standard: '10th', division: 'A', image: 'path/to/geography.jpg', completion: 70 }
];

const SubjectCard = ({ subject, onClick, showForSubjectsOverview }) => {
  return (
    <div className="subject-card" onClick={() => onClick(subject.id)}>
      <img className="subject-image" src={subject.image} alt={subject.name} />
      {showForSubjectsOverview && (
        <div className="options-menu">
          <FaEllipsisV className="icon" />
        </div>
      )}
      <div className="text-container">
        <div className="standard-division">{subject.standard} {subject.division}</div>
        <div className="subject-name">{subject.name}</div>
      </div>
      {showForSubjectsOverview && (
        <div>
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${subject.completion}%` }}></div>
          </div>
          <div className="progress-text">{subject.completion}% complete</div>
        </div>
      )}
    </div>
  );
};

export default SubjectCard;
export { subjectsData };
