import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Algebra.css';

const Algebra = ({ onGroupsClick, onAttendanceClick, onDashboardLinkClick }) => {
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

  const videoCards = [
    'Video 1',
    'Video 2',
    'Video 3',
    'Video 4',
    'Video 5',
    'Video 6',
    'Video 7',
    'Video 8',
  ];

  const displayedVideos = showAllVideos ? videoCards : videoCards.slice(0, 4);

  return (
    <div className="subject-page-container">
      <h2 className="subject-name">Algebra</h2>
      <button className="dashboard-button" onClick={handleDashboardLinkClick}>Dashboard</button>
      <div className="links-line">
        <span className="breadcrumb-link" onClick={handleDashboardLinkClick}>Dashboard</span> /
        <span className="breadcrumb-link">Subjects</span> / Academic Year Term / Standard Division / Subject Code
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
            <a href="/path/to/syllabus.pdf" className="syllabus-download">Download Syllabus (PDF)</a>
            <p>Syllabus Overview: Brief description here.</p>
          </div>
        </div>
      </div>

      <div className="section-box">
        <div className="section-header">
          <h3 className="section-title">Practical</h3>
        </div>
        <div className="section-content">
          <div className="practical-section">
            <p>Details of the practical.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algebra;
