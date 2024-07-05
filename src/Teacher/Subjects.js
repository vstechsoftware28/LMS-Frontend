// Subjects.js
import React from 'react';
import styled from 'styled-components';

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

const SubjectCard = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 150px;
  background-color: #e0f7fa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const SubjectImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
  margin-bottom: 0.5rem;
`;

const SubjectText = styled.div`
  text-align: left;
  width: 100%;
`;

const StandardDivision = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;

const SubjectName = styled.div`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Subjects = ({ subjects, onSubjectCardClick }) => {
  return (
    <div>
      <SectionHeading>Subjects</SectionHeading>
      <SubjectsContainer>
        {subjects.map((subject, index) => (
          <SubjectCard key={index} onClick={() => onSubjectCardClick(subject.name)}>
            <SubjectImage src={subject.image} alt={subject.name} />
            <SubjectText>
              <StandardDivision>{subject.standard} {subject.division}</StandardDivision>
              <SubjectName>{subject.name}</SubjectName>
            </SubjectText>
          </SubjectCard>
        ))}
      </SubjectsContainer>
    </div>
  );
};

export default Subjects;
