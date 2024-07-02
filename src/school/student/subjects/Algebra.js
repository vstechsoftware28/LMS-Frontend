// Algebra.js

import React from 'react';
import styled from 'styled-components';

const SubjectPageContainer = styled.div`
  padding: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  margin-bottom: 0.5rem;
  text-align: center;
`;

const SectionContent = styled.div`
  margin-left: 0;
  text-align: left;
  margin-bottom: 40px;
`;

const SubjectName = styled.h2`
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const LinksLine = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1rem;
  text-align: center;
`;

const LiveLecturesSection = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const LiveLectureLink = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const RecordedVideosCarousel = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 2rem;
  text-align: left;
`;

const RecordedVideoCard = styled.div`
  display: inline-block;
  width: 200px;
  height: 150px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-right: 1rem;
`;

const CarouselButton = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 0.5rem; /* Adjusted top margin */
  width: 150px;
`;

const AttendanceGroupsSection = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const SmallButton = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem; /* Adjusted top margin */
  width: 120px;
`;

const CourseInformationSection = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const SyllabusDownload = styled.a`
  display: block;
  margin-top: 0.5rem;
  text-align: left;
`;

const PracticalSection = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const Algebra = ({ onGroupsClick, onAttendanceClick }) => {
  // Example functions
  const handleGroupsClick = () => {
    if (onGroupsClick) {
      onGroupsClick(); // Call the callback function passed from parent component
    }
  };

  const handleAttendanceClick = () => {
    if (onAttendanceClick) {
      onAttendanceClick(); // Call the callback function passed from parent component
    }
  };

  return (
    <SubjectPageContainer>
      <SubjectName>Algebra</SubjectName>
      <LinksLine>Dashboard / Subjects / Academic Year Term / Standard Division / Subject Code</LinksLine>

      <SectionHeader>
        <SectionTitle>Live Lectures</SectionTitle>
        <SmallButton>Create</SmallButton>
      </SectionHeader>
      <SectionContent>
        <LiveLecturesSection>
          <LiveLectureLink href="#">Live Lecture Link 1</LiveLectureLink>
          <LiveLectureLink href="#">Live Lecture Link 2</LiveLectureLink>
          <LiveLectureLink href="#">Live Lecture Link 3</LiveLectureLink>
        </LiveLecturesSection>

        <SectionHeader>
          <SectionTitle>Recorded Videos</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <RecordedVideosCarousel>
            <div style={{ display: 'flex' }}>
              <RecordedVideoCard>Video 1</RecordedVideoCard>
              <RecordedVideoCard>Video 2</RecordedVideoCard>
              <RecordedVideoCard>Video 3</RecordedVideoCard>
              <RecordedVideoCard>Video 4</RecordedVideoCard>
              <RecordedVideoCard>Video 5</RecordedVideoCard>
            </div>
            <CarouselButton>See All</CarouselButton>
          </RecordedVideosCarousel>

          <SectionHeader>
            <SectionTitle>Attendance and Groups</SectionTitle>
          </SectionHeader>
          <SectionContent>
            <AttendanceGroupsSection>
              <SmallButton onClick={handleAttendanceClick}>Attendance</SmallButton>
              <SmallButton onClick={handleGroupsClick}>Groups</SmallButton>
            </AttendanceGroupsSection>
          </SectionContent>

          <SectionHeader>
            <SectionTitle>Course Information</SectionTitle>
          </SectionHeader>
          <SectionContent>
            <CourseInformationSection>
              <p>Course Name: Algebra</p>
              <SyllabusDownload href="/path/to/syllabus.pdf">Download Syllabus (PDF)</SyllabusDownload>
              <p>Syllabus Overview: Brief description here.</p>
            </CourseInformationSection>
          </SectionContent>

          <SectionHeader>
            <SectionTitle>Practical</SectionTitle>
          </SectionHeader>
          <SectionContent>
            <PracticalSection>
              <p>Details of the practical.</p>
            </PracticalSection>
          </SectionContent>
        </SectionContent>
      </SectionContent>
    </SubjectPageContainer>
  );
};

export default Algebra;
