// Subjects.js
import React from 'react';
import styled from 'styled-components';
import SubjectCard from './SubjectCard';

const SubjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

const SectionHeading = styled.h2`
  margin-top: 30px;
  font-size: 1.5rem;
  padding: 2rem;
`;

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
      <SectionHeading>Subjects</SectionHeading>
      <SubjectsContainer>
        {subjectsData.map((subject, index) => (
          <SubjectCard key={index} subject={subject} onClick={onSubjectCardClick} />
        ))}
      </SubjectsContainer>
    </div>
  );
};

export default Subjects;
