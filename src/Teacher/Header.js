import React, { useState } from 'react';
import { FaBars, FaMapMarkerAlt, FaBell, FaEnvelope, FaUser, FaAngleRight, FaComment, FaWrench, FaSignOutAlt, FaLock } from 'react-icons/fa';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../Teacher/assets/image/Logo-01.png';

const Header = ({ onToggleSidebar, sidebarOpen, onChangePasswordClick, onProfileClick, onPreferencesClick }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleProfileClick = () => {
    if (onProfileClick) {
      onProfileClick();
    }
  };

  const handlePreferenceClick = () => {
    if (onPreferencesClick) {
      onPreferencesClick();
    }
  };

  return (
    <>
      <header className="header">
        <div className="left-section">
          {sidebarOpen ? (
            <FaAngleRight className="toggle-icon" onClick={onToggleSidebar} />
          ) : (
            <FaBars className="toggle-icon" onClick={onToggleSidebar} />
          )}
          <img src={logo} alt="Logo" className="logo" style={{ width: '40px' }} />
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
          <span className="profile-text">Teacher</span>
          <div className="profile-icon" onClick={toggleProfileMenu}>
            <FaUser />
            <div className={`dropdown-menu ${isProfileMenuOpen ? 'open' : ''}`}>
              <div className="dropdown-item" onClick={handleProfileClick}>
                <FaUser /> Profile
              </div>
              <div className="dropdown-item" onClick={onChangePasswordClick}>
                <FaLock /> Change Password
              </div>
              <div className="dropdown-item">
                <FaComment /> Message
              </div>
              <div className="dropdown-item" onClick={handlePreferenceClick}>
                <FaWrench /> Preferences
              </div>
              <div className="dropdown-item">
                <FaLock /> Password
              </div>
              <div className="dropdown-item">
                <FaSignOutAlt /> Logout
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
