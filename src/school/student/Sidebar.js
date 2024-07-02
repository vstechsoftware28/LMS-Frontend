// Sidebar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaCalendar, FaBook, FaPoll, FaPlus, FaAngleDown, FaAngleRight } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: ${({ isOpen }) => (isOpen ? '250px' : '60px')};
  height: calc(100vh - 60px); /* Adjust based on header height */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 60px; /* Adjust based on header height */
  left: 0;
  z-index: 1000; /* Ensure sidebar is above other content */
  transition: width 0.3s ease;
  overflow-x: hidden; /* Prevent horizontal overflow */
  overflow-y: ${({ isExpanded }) => (isExpanded ? 'auto' : 'hidden')}; /* Scrollable when expanded */
`;

const SidebarItem = styled.div`
  width: 100%;
  padding: 0.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')}; /* Align items based on sidebar state */
  cursor: pointer;
  color: ${({ isSubcategory, isSubsubcategory }) =>
    isSubsubcategory ? '#666' : isSubcategory ? '#333' : 'black'};
  background-color: ${({ isSelected, isSubcategory, isSubsubcategory }) =>
    isSelected ? '#87CEEB' : isSubsubcategory ? '#f5f5f5' : isSubcategory ? '#f0f0f0' : 'transparent'};
  margin-left: ${({ isOpen, labelIndentation }) => (isOpen ? `${labelIndentation}px` : '0')}; /* Adjust margin left */
  border: 1px solid #ccc; /* Add border */
  border-left: 3px solid ${({ isSelected }) => (isSelected ? '#87CEEB' : 'transparent')}; /* Highlight selected item */
  &:hover {
    background-color: ${({ isSubcategory, isSubsubcategory }) =>
      isSubsubcategory ? '#f5f5f5' : isSubcategory ? '#f0f0f0' : '#87CEEB'};
    border-left: 3px solid #87CEEB; /* Highlight on hover */
  }
`;

const SidebarIcon = styled.div`
  font-size: 1.2rem;
  margin-right: ${({ isOpen }) => (isOpen ? '0.5rem' : '0')};
  margin-left: 0px; /* Consistent margin left for all icons */
`;

const SidebarLabel = styled.div`
  flex-grow: 1;
  margin-left: 5px; /* Adjusted indentation */
  text-align: left; /* Left-align text */
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Show label only when sidebar is open */
`;

const PlusButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  color: black;
  background-color: transparent;
  margin-left: 13px; /* Adjust margin left to match SidebarIcon */
  border: 1px solid #ccc; /* Add border */
  &:hover {
    background-color: #f5f5f5; /* Add hover effect */
  }
`;

const Sidebar = ({ isOpen, onItemClick, selectedComponent, onAddSubjectClick }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [expandedSubcategories, setExpandedSubcategories] = useState([]);

  const categories = [
    { name: 'Dashboard', icon: <FaHome />, labelIndentation: 10 },
    { name: 'Calendar', icon: <FaCalendar />, labelIndentation: 10 },
    {
      name: 'Subjects',
      icon: <FaBook />,
      labelIndentation: 10,
      subcategories: [
        { 
          name: 'Mathematics', 
          icon: <FaAngleRight />, 
          subsubcategories: [
            { name: 'Algebra', icon: <FaAngleRight /> }, 
            { name: 'Geometry', icon: <FaAngleRight /> }
          ] 
        },
        { 
          name: 'Science', 
          icon: <FaAngleRight />, 
          subsubcategories: [
            { name: 'Physics', icon: <FaAngleRight /> }, 
            { name: 'Chemistry', icon: <FaAngleRight /> }
          ] 
        },
        { 
          name: 'History', 
          icon: <FaAngleRight />, 
          subsubcategories: [
            { name: 'History1', icon: <FaAngleRight /> }, 
            { name: 'History2', icon: <FaAngleRight /> }
          ] 
        },
        { 
          name: 'Geography', 
          icon: <FaAngleRight />, 
          subsubcategories: [
            { name: 'Geography 1', icon: <FaAngleRight /> }, 
            { name: 'Geography 2', icon: <FaAngleRight /> }
          ] 
        },
      ],
    },
    {
      name: 'Result',
      icon: <FaPoll />,
      labelIndentation: 10,
      subcategories: [
        { name: 'Term 1', icon: <FaAngleRight /> },
        { name: 'Term 2', icon: <FaAngleRight /> },
        { name: 'Term 3', icon: <FaAngleRight /> },
        { name: 'Final', icon: <FaAngleRight /> },
      ],
    },
  ];

  const handleSidebarItemClick = (itemName) => {
    onItemClick(itemName);
  };

  const toggleCategory = (categoryName) => {
    if (expandedCategories.includes(categoryName)) {
      setExpandedCategories(expandedCategories.filter((cat) => cat !== categoryName));
    } else {
      setExpandedCategories([...expandedCategories, categoryName]);
    }
  };

  const toggleSubcategory = (subcategoryName) => {
    if (expandedSubcategories.includes(subcategoryName)) {
      setExpandedSubcategories(expandedSubcategories.filter((subcat) => subcat !== subcategoryName));
    } else {
      setExpandedSubcategories([...expandedSubcategories, subcategoryName]);
    }
  };

  return (
    <SidebarContainer isOpen={isOpen} isExpanded={expandedCategories.length > 0}>
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <SidebarItem
            isSelected={selectedComponent === category.name}
            isSubcategory={false}
            isOpen={isOpen}
            labelIndentation={category.labelIndentation}
            onClick={() => {
              toggleCategory(category.name);
              handleSidebarItemClick(category.name); // Assuming parent category click also triggers selection
            }}
          >
            <SidebarIcon isOpen={isOpen}>{category.icon}</SidebarIcon>
            <SidebarLabel isOpen={isOpen}>{category.name}</SidebarLabel>
            {category.subcategories && expandedCategories.includes(category.name) }
          </SidebarItem>
          {category.subcategories && expandedCategories.includes(category.name) && (
            <>
              {category.subcategories.map((subcat, idx) => (
                <React.Fragment key={idx}>
                  <SidebarItem
                    isSubcategory={true}
                    isOpen={isOpen}
                    labelIndentation={category.labelIndentation + 20}
                    onClick={() => {
                      toggleSubcategory(subcat.name);
                      handleSidebarItemClick(subcat.name); // Handle subcategory click
                    }}
                  >
                    <SidebarIcon isOpen={isOpen}>{subcat.icon}</SidebarIcon>
                    <SidebarLabel isOpen={isOpen}>{subcat.name}</SidebarLabel>
                    {subcat.subsubcategories && (expandedSubcategories.includes(subcat.name) ? <FaAngleDown /> : <FaAngleRight />)}
                  </SidebarItem>
                  {subcat.subsubcategories && expandedSubcategories.includes(subcat.name) && (
                    <>
                      {subcat.subsubcategories.map((subsubcat, subIdx) => (
                        <SidebarItem
                          key={subIdx}
                          isSubcategory={true}
                          isSubsubcategory={true}
                          isOpen={isOpen}
                          labelIndentation={category.labelIndentation + 40}
                          onClick={() => {
                            handleSidebarItemClick(subsubcat.name); // Handle sub-subcategory click
                          }}
                        >
                          <SidebarIcon isOpen={isOpen}>{subsubcat.icon}</SidebarIcon>
                          <SidebarLabel isOpen={isOpen}>{subsubcat.name}</SidebarLabel>
                        </SidebarItem>
                      ))}
                    </>
                  )}
                </React.Fragment>
              ))}
            </>
          )}
        </React.Fragment>
      ))}
      <PlusButton onClick={onAddSubjectClick}>
        <FaPlus />
        <SidebarLabel isOpen={isOpen}>Add Subject</SidebarLabel>
      </PlusButton>
    </SidebarContainer>
  );
};

export default Sidebar;
