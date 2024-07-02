// Dashboard.js
import React, { useState } from 'react';
import styled from 'styled-components';
import SubjectCard from './SubjectCard';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SectionHeading = styled.h2`
  margin-top: 30px;
  font-size: 1.5rem;
  padding: 2rem;
`;

const ScrollContainer = styled.div`
  height: 50px;
  overflow: hidden;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
`;

const Notices = styled.div`
  display: flex;
  flex-direction: column;
  animation: scroll 10s linear infinite;
`;

const Notice = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const RecentlyAccessedContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const SubjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

const subjectsData = [
  { id: 'algebra', name: 'Algebra', standard: '10th', division: 'A', image: 'path/to/Algebra.jpg' },
  { id: 'geometry', name: 'Geometry', standard: '10th', division: 'A', image: 'path/to/Geometry.jpg' },
  { id: 'physics', name: 'Physics', standard: '10th', division: 'B', image: 'path/to/Physics.jpg' },
  { id: 'chemistry', name: 'Chemistry', standard: '10th', division: 'B', image: 'path/Chemistry.jpg' },
  { id: 'history', name: 'History', standard: '9th', division: 'A', image: 'path/to/history.jpg' },
  { id: 'geography', name: 'Geography', standard: '9th', division: 'A', image: 'path/to/geography.jpg' }
];

const Dashboard = ({ onSubjectCardClick }) => {
  const [notices] = useState([
    'Notice 1: It\'s a holiday',
    'Notice 2: It\'s a Monday',
    'Notice 3: Holiday Holiday Holiday'
  ]);

  const [recentlyAccessedSubjects] = useState([
    { id: 'algebra', name: 'Algebra', standard: '10th', division: 'A', image: 'path/to/Algebra.jpg' },
    { id: 'chemistry', name: 'Chemistry', standard: '10th', division: 'B', image: 'path/Chemistry.jpg' },
    { id: 'physics', name: 'Physics', standard: '10th', division: 'B', image: 'path/to/Physics.jpg' }
  ]);

  return (
    <DashboardContainer>
      <ScrollContainer>
        <Notices>
          {notices.map((notice, index) => (
            <Notice key={index}>{notice}</Notice>
          ))}
        </Notices>
      </ScrollContainer>

      <div>
        <SectionHeader>
          <SectionHeading>Recently Accessed Subjects</SectionHeading>
        </SectionHeader>
        <RecentlyAccessedContainer>
          {recentlyAccessedSubjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} onClick={onSubjectCardClick} />
          ))}
        </RecentlyAccessedContainer>
      </div>

      <div>
        <SectionHeader>
          <SectionHeading>Subjects Overview</SectionHeading>
        </SectionHeader>
        <SubjectsContainer>
          {subjectsData.map((subject, index) => (
            <SubjectCard key={index} subject={subject} onClick={onSubjectCardClick} />
          ))}
        </SubjectsContainer>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
