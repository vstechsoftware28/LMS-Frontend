import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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
  font-size: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #87CEEB;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #00BFFF;
  }
`;

const ScrollContainer = styled.div`
  height: 50px;
  overflow: hidden;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
`;

const scroll = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const Notices = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${scroll} 10s linear infinite;
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

const RecentlyAccessedCard = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 150px;
  background-color: #e0f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor:pointer;
`;

const SubjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  
`;

const SubjectCard = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 150px;
  background-color: #e0f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor:pointer;
`;

const ViewAllButton = styled.button`
  display:flex;
  align:left;
  width: auto;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #87CEEB;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #00BFFF;
  }
`;

const AllSubjectsContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;

const SubjectCardLarge = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 150px;
  background-color: #e0f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Dashboard = () => {

  const navigate = useNavigate();
  
  const [notices] = useState([
    'Notice 1: Its a holiday ',
    'Notice 2: Its a monday',
    'Notice 3: Holiday Holiday Holiday'
  ]);

  const [recentlyAccessedSubjects] = useState(['Physics', 'Chemistry', 'Maths']);

  const [subjects] = useState([
    'Physics',
    'Chemistry',
    'Maths',
    'Biology',
    'History',
    'Geography',
    'Literature',
    'Art',
    'Music',
    'Computer Science',
    'Economics'
  ]);

  const [allSubjectsOpen, setAllSubjectsOpen] = useState(false);

  const handleViewAllSubjects = () => {
    setAllSubjectsOpen(!allSubjectsOpen);
  };
  const handleSubjectClick = (subject) => {
    navigate(`/subject/${subject}`);
  };

  return (
    <DashboardContainer>
      <div>
        <ScrollContainer>
          <Notices>
            {notices.map((notice, index) => (
              <Notice key={index}>{notice}</Notice>
            ))}
          </Notices>
        </ScrollContainer>
      </div>

      <div>
        <SectionHeader>
          <SectionHeading>Recently Accessed Subjects</SectionHeading>
        </SectionHeader>
        <RecentlyAccessedContainer>
          {recentlyAccessedSubjects.map((subject, index) => (
            <RecentlyAccessedCard key={index} onClick={() => handleSubjectClick(subject)}>{subject}</RecentlyAccessedCard>
          ))}
        </RecentlyAccessedContainer>
      </div>

      <div>
        <SectionHeader>
          <SectionHeading>Subjects Overview</SectionHeading>
        </SectionHeader>
        <ViewAllButton onClick={handleViewAllSubjects}>
            {allSubjectsOpen ? 'Show Less' : 'View All'}
          </ViewAllButton>
        <SubjectsContainer>
          {subjects.slice(0, allSubjectsOpen ? subjects.length : 4).map((subject, index) => (
            <SubjectCard key={index}onClick={() => handleSubjectClick(subject)} >{subject}</SubjectCard>
          ))}
        </SubjectsContainer>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
