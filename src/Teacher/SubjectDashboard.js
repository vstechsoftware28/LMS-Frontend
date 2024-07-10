import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SubjectDashboard.css';
import { FaCaretDown, FaCog, FaCogs, FaPen, FaFilter, FaRegFileArchive, FaLevelUpAlt, FaArrowLeft } from 'react-icons/fa';
import { FcComments } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import '../Components/SubjectDetails.css';
import img from './Community Engagement.jpg';

const SubjectDashboard = ({onVideoClick,onTurnEditing}) => {
  const { name } = useParams();

  const handleUploadLiveLecture = () => {
    alert('Upload Live Lecture clicked');

  };
  const handleVideoClick = () => {
    if (onVideoClick) {
      onVideoClick();
    }
  }

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleTurnEditing = () => {
    if(onTurnEditing){
      onTurnEditing();
    }
  }


  const uploadedVideos = [
    { id: 1, image: '../Teacher/assets/image/Corporate Training and Professional Development.jpg', title: 'Video Title 1' },
    { id: 2, image: '../Teacher/assets/image/Diversity and Inclusion Initiatives.jpg', title: 'Video Title 2' },
    { id: 3, image: '../Teacher/assets/image/FAQs and Support Documentation.jpg', title: 'Video Title 3' },
    { id: 4, image: '../Teacher/assets/image/Live Classes and Webinars.jpg', title: 'Video Title 4' },
    { id: 5, image: '../Teacher/assets/image/Educational Resources.jpg', title: 'Video Title 5' },
    { id: 6, image: './Community Engagement.jpg', title: 'Video Title 6' },
  ];

  return (
    <>
    
    <div className="subject-details">
        <div className="basic-info">
          <div className="sub-name">
            <span className="icon-text">
              <p>Mathematics</p>
            </span>
            <span className="pointer" onClick={toggleDropdown}>
              <FaCog /><FaCaretDown />

            </span>
          </div>
          <div className="url">
            <a href="/">Dashboard</a> /
            <a href="">Subjects</a> /
            <a href="">Mathematics</a>
          </div>
        </div>
        {isDropdownVisible && (
          <div className="dropdown">
            <ul>
              <li><FaCogs />Edit settings</li>
              <li onClick={handleTurnEditing}>< FaPen />Turn editing on</li>
              <li><FaCogs />Course completion</li>
              <li><FaFilter />Filters</li>
              <li><FaCogs />Grandbook setup</li>
              <li><FaRegFileArchive />Backup</li>
              <li><FaLevelUpAlt />Restore</li>
              <li><FaLevelUpAlt />Import</li>
              <li><FaArrowLeft />Reset</li>
              <li><FaCog />More...</li>
            </ul>
          </div>
        )}
        <div className="subject-view">
          <div className="annoucement">
            <h5><FcComments />Annoucements</h5>
          </div><hr></hr>
          <div className="topic-1">
            <h3>Topic 1</h3>
          </div><hr></hr>
          <div className="topic-2">
            <h3>Topic 2</h3>
          </div><hr></hr>
          <div className="topic-3">
            <h3>Topic 3</h3>
          </div><hr></hr>
          <div className="topic-4">
            <h3>Topic 4</h3>
          </div><hr></hr>
          <div className="topic-5">
            <h3>Topic 5</h3>
          </div>

        </div>
      </div>
      <div className="subject-dashboard-container">
        <h1 className="subject-heading">dashboard/classname/year/division/subjectid/{name}</h1>
        <div className="button-container">
          <Link className="upload-button" onClick={handleUploadLiveLecture}>Create Live Lecture</Link>
          <div className="upload-button" onClick={handleVideoClick}>Upload Video Lecture</div>
        </div>
        <div className="video-container">
          {uploadedVideos.map((video) => (
            <div key={video.id} className="video-con">
              <div className="video-box">
                <img className="video" src={video.image} alt={video.title} />
              </div>
              <div className="video-title">{video.title}</div>
            </div>
          ))}
        </div>
        <h3 className="description">Description:</h3>
        <p className="para">
          In Maths, integration is a method of adding or summing up the parts to find the whole.
          It is a reverse process of differentiation, where we <br /> reduce the functions into parts.
          This method is used to find the summation under a vast scale. In Mathematics, when we cannot
          perform <br /> general addition operations, we use integration to add values on a large scale.
        </p>
        <h3 className="material">Teaching Material:</h3>
        {/* Add more content related to the specific subject here */}
      </div>
    </>
  );
};

export default SubjectDashboard;
