import React, { useState } from 'react';
import { FaBars, FaMapMarkerAlt, FaBell, FaEnvelope, FaUser, FaAngleRight } from 'react-icons/fa';
import './Header.css';

const Header = ({ onToggleSidebar, sidebarOpen, onChangePasswordClick }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="header">
      <div className="left-section">
        {sidebarOpen ? (
          <FaBars className="toggle-icon" onClick={onToggleSidebar} />
        ) : (
          <FaAngleRight className="toggle-icon" onClick={onToggleSidebar} />
        )}
        <img src="./assets/logos/vsTechLogoSq.jpeg" alt="Logo" className="logo" />
        <div className="location-container">
          <FaMapMarkerAlt className="location-icon" />
          <span>Kesnand, Wagholi</span>
        </div>
      </div>
      <div className="right-section">
        <div className="notification-icon">
          <FaBell />
        </div>
        <div className="message-icon">
          <FaEnvelope />
        </div>
        <span className="profile-text">Student</span>
        <div className="profile-icon" onClick={toggleProfileMenu}>
          <FaUser />
          <div className={`dropdown-menu ${isProfileMenuOpen ? 'open' : ''}`}>
            <div className="dropdown-item">Profile</div>
            <div className="dropdown-item" onClick={onChangePasswordClick}>Change Password</div>
            <div className="dropdown-item">Message</div>
            <div className="dropdown-item">Password</div>
            <div className="dropdown-item">Logout</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
