// SubjectCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 150px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
  margin-bottom: 0.5rem;
`;

const Text = styled.div`
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

const SubjectCard = ({ subject, onClick }) => (
  <Card onClick={() => onClick(subject.id)}>
    <Image src={subject.image} alt={subject.name} />
    <Text>
      <StandardDivision>{subject.standard} {subject.division}</StandardDivision>
      <SubjectName>{subject.name}</SubjectName>
    </Text>
  </Card>
);

export default SubjectCard;
