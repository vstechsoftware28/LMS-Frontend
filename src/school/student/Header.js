import React, { useState } from 'react';
import { FaBars, FaMapMarkerAlt, FaBell, FaEnvelope, FaUser, FaAngleRight, FaUserCircle, FaLock, FaComment, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';
import logo from './assets/logos/Logo.png';

const Header = ({ onToggleSidebar, sidebarOpen, onChangePasswordClick }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="header">
      <div className="left-section">
        {sidebarOpen ? (
          <FaAngleRight className="toggle-icon" onClick={onToggleSidebar} />
        ) : (
          <FaBars className="toggle-icon" onClick={onToggleSidebar} />
        )}
        <img src={logo} alt="Logo" className="logo" style={{width:'40px'}} />
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
            <div className="dropdown-item">
              <FaUserCircle className="dropdown-icon" />
              Profile
            </div>
            <div className="dropdown-item" onClick={onChangePasswordClick}>
              <FaLock className="dropdown-icon" />
              Change Password
            </div>
            <div className="dropdown-item">
              <FaComment className="dropdown-icon" />
              Message
            </div>
            <div className="dropdown-item">
              <FaLock className="dropdown-icon" />
              Password
            </div>
            <div className="dropdown-item">
              <FaSignOutAlt className="dropdown-icon" />
              Logout
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
