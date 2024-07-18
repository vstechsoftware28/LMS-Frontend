import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Algebra.css';

const Algebra = ({ onGroupsClick, onAttendanceClick, onDashboardLinkClick, onSubjectLinkClick }) => {
  const [showAllVideos, setShowAllVideos] = useState(false);

  const handleGroupsClick = () => {
    if (onGroupsClick) {
      onGroupsClick();
    }
  };

  const handleAttendanceClick = () => {
    if (onAttendanceClick) {
      onAttendanceClick();
    }
  };

  const handleSeeAllClick = () => {
    setShowAllVideos(!showAllVideos);
  };

  const handleDashboardLinkClick = () => {
    if (onDashboardLinkClick) {
      onDashboardLinkClick();
    }
  };

  const handleSubjectLinkClick = () => {
    if (onSubjectLinkClick) {
      onSubjectLinkClick();
    }
  };

  const videoCards = [
    'Introduction to Algebra',
    'Linear Equations in Algebra',
    'Quadratic Equations and Their Solutions',
    'Polynomial Functions and Their Graphs',
    'Exponential and Logarithmic Functions',
    'Matrices and Their Applications',
    'Systems of Equations and Inequalities',
    'Complex Numbers and Their Operations',
  ];

  const displayedVideos = showAllVideos ? videoCards : videoCards.slice(0, 4);

  return (
    <div className="subject-page-container">
      <h2 className="subject-name" style={{fontSize:'2rem'}}>Algebra</h2>
      <div className="links-line">
        <span className="breadcrumb-link" onClick={handleDashboardLinkClick}>Dashboard</span> /
        <span className="breadcrumb-link" onClick={handleSubjectLinkClick}>Subjects</span> / Academic Year Term / Standard Division / Subject Code
      </div>

      <div className="section-box">
        <div className="section-header">
          <h3 className="section-title">Live Lectures</h3>
          <button className="small-button">Create</button>
        </div>
        <div className="section-content">
          <div className="live-lectures-section">
            <a href="#" className="live-lecture-link">Live Lecture Link 1</a>
            <a href="#" className="live-lecture-link">Live Lecture Link 2</a>
            <a href="#" className="live-lecture-link">Live Lecture Link 3</a>
          </div>
        </div>
      </div>

      <div className="section-box">
        <div className="section-header">
          <h3 className="section-title">Recorded Videos</h3>
        </div>
        <div className="section-content">
          <div className="recorded-videos-grid">
            {displayedVideos.map((video, index) => (
              <div key={index} className="recorded-video-card">{video}</div>
            ))}
          </div>
          <button className="view-all-button" onClick={handleSeeAllClick}>
            {showAllVideos ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>

      <div className="section-box">
        <div className="section-content">
          <div className="buttons-section">
            <button className="small-button" onClick={handleAttendanceClick}>Attendance</button>
            <button className="small-button" onClick={handleGroupsClick}>Groups</button>
          </div>
        </div>
      </div>

      <div className="section-box">
        <div className="section-header">
          <h3 className="section-title">Course Information</h3>
        </div>
        <div className="section-content">
          <div className="course-information-section">
            <p>Course Name: Algebra</p>
            <p>Course Code: ALG101</p>
            <p>Credits: 3</p>
            <p>Duration: One Semester</p>
            <p>Prerequisites: Basic Algebra Skills</p>
            <p>Course Description: This course covers fundamental concepts in algebra, including equations, functions, and their applications in real-world scenarios. Students will explore topics such as linear equations, quadratic equations, polynomial functions, exponential and logarithmic functions, matrices, systems of equations, and complex numbers.</p>
            <a href="/path/to/syllabus.pdf" className="syllabus-download">Download Syllabus (PDF)</a>
            <p>Syllabus Overview: The syllabus provides a detailed outline of course objectives, topics covered each week, required readings, assignments, and examination details.</p>
            <p>Assessment: Students will be evaluated through quizzes, assignments, mid-term exams, and a comprehensive final exam.</p>
          </div>
        </div>
      </div>

      <div className="section-box">
        <div className="section-header">
          <h3 className="section-title">Practical</h3>
        </div>
        <div className="section-content">
          <div className="practical-section">
            <p>Practical Details: The practical component of the course includes hands-on problem-solving exercises, computer-based simulations, and laboratory sessions. Students will apply theoretical concepts learned in lectures to practical scenarios, enhancing their understanding of algebraic concepts and techniques.</p>
            <p>Lab Sessions: Students will have access to dedicated lab sessions where they can perform experiments, analyze data, and verify theoretical results. Lab instructors will guide students through practical exercises, ensuring comprehensive learning and skill development.</p>
            <p>Projects: Throughout the semester, students will work on individual and group projects that require them to solve complex algebraic problems, develop algorithms, and present their findings. Projects encourage critical thinking, collaboration, and creativity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algebra;
