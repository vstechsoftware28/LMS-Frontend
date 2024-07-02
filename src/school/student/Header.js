import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaMapMarkerAlt, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #87CEEB; /* Sky blue */
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  grid-area: header;
  z-index: 1000; /* Ensure header is above other content */
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-right: 1rem;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationIcon = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`;

const MessageIcon = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`;

const ProfileIcon = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center; /* Align items vertically */
`;

const ProfileText = styled.span`
  margin-left: 0.5rem;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background-color: #fff;
  width: 100px; /* Adjust width as needed */
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 0.75rem;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Header = ({ onToggleSidebar }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <FaBars onClick={onToggleSidebar} style={{ cursor: 'pointer', marginRight: '1rem' }} />
        <Logo src="../student/assets/logos/vsTechLogoSq.jpeg" alt="Logo" />
        <LocationContainer>
          <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} />
          <span>Kesnand, Wagholi</span>
        </LocationContainer>
      </LeftSection>
      <RightSection>
        <NotificationIcon>
          <FaBell />
        </NotificationIcon>
        <MessageIcon>
          <FaEnvelope />
        </MessageIcon>
        <ProfileIcon onClick={toggleProfileMenu}>
          <FaUser />
          <ProfileText>Student</ProfileText>
          <DropdownMenu isOpen={isProfileMenuOpen}>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Message</DropdownItem>
            <DropdownItem>Password</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </ProfileIcon>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
