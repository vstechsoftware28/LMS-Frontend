import React, { useState } from 'react';
import {
  FaHome,
  FaCalendar,
  FaBook,
  FaPoll,
  FaPlus,
  FaAngleRight,
  FaAngleDown,
  FaChalkboardTeacher,
  FaFlask,
  FaHistory,
  FaGlobe,
  FaFileAlt,
} from 'react-icons/fa';
import './Sidebar.css';

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
        { name: 'Mathematics', icon: <FaChalkboardTeacher />, subsubcategories: [{ name: 'Algebra' }, { name: 'Geometry' }] },
        { name: 'Science', icon: <FaFlask />, subsubcategories: [{ name: 'Physics' }, { name: 'Chemistry' }] },
        { name: 'History', icon: <FaHistory />, subsubcategories: [{ name: 'History1' }, { name: 'History2' }] },
        { name: 'Geography', icon: <FaGlobe />, subsubcategories: [{ name: 'Geography 1' }, { name: 'Geography 2' }] },
      ],
    },
    {
      name: 'Result',
      icon: <FaPoll />,
      labelIndentation: 10,
      subcategories: [
        { name: 'Term 1', icon: <FaFileAlt />, subsubcategories: [{ name: 'Result 1A' }, { name: 'Result 1B' }] },
        { name: 'Term 2', icon: <FaFileAlt />, subsubcategories: [{ name: 'Result 2A' }, { name: 'Result 2B' }] },
        { name: 'Term 3', icon: <FaFileAlt />, subsubcategories: [{ name: 'Result 3A' }, { name: 'Result 3B' }] },
        { name: 'Final', icon: <FaFileAlt />, subsubcategories: [{ name: 'Final Result' }] },
      ],
    },
  ];

  const handleSidebarItemClick = (itemName) => {
    onItemClick(itemName);
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prevExpanded) => {
      if (prevExpanded.includes(categoryName)) {
        return prevExpanded.filter((cat) => cat !== categoryName);
      } else {
        return [categoryName];
      }
    });
  };

  const toggleSubcategory = (subcategoryName) => {
    setExpandedSubcategories((prevExpanded) => {
      if (prevExpanded.includes(subcategoryName)) {
        return prevExpanded.filter((subcat) => subcat !== subcategoryName);
      } else {
        return [...prevExpanded, subcategoryName];
      }
    });
  };

  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-items">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <div
              className={`sidebar-item ${selectedComponent === category.name ? 'selected' : ''} ${category.subcategories ? 'has-subcategories' : ''}`}
              style={{ marginLeft: isOpen ? `${category.labelIndentation}px` : '0' }}
              onClick={() => {
                toggleCategory(category.name);
                handleSidebarItemClick(category.name);
              }}
            >
              <div className="sidebar-icon">{category.icon}</div>
              {isOpen && (
                <>
                  <div className="sidebar-label">{category.name}</div>
                  {category.subcategories && (
                    expandedCategories.includes(category.name) ? (
                      <FaAngleDown className="sub-arrow" />
                    ) : (
                      <FaAngleRight className="sub-arrow" />
                    )
                  )}
                </>
              )}
            </div>
            {isOpen && category.subcategories && expandedCategories.includes(category.name) && (
              <>
                {category.subcategories.map((subcat, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      className={`sidebar-item subcategory ${expandedSubcategories.includes(subcat.name) ? 'expanded' : ''}`}
                      style={{ marginLeft: isOpen ? `${category.labelIndentation}px` : '0' }}
                      onClick={() => {
                        toggleSubcategory(subcat.name);
                        handleSidebarItemClick(subcat.name);
                      }}
                    >
                      <div className="subcategory-icon">{subcat.icon}</div>
                      {isOpen && (
                        <>
                          <div className="sidebar-label">{subcat.name}</div>
                          {subcat.subsubcategories && (
                            expandedSubcategories.includes(subcat.name) ? (
                              <FaAngleDown className="sub-arrow" />
                            ) : (
                              <FaAngleRight className="sub-arrow" />
                            )
                          )}
                        </>
                      )}
                    </div>
                    {isOpen && subcat.subsubcategories && expandedSubcategories.includes(subcat.name) && (
                      <>
                        {subcat.subsubcategories.map((subsubcat, subIdx) => (
                          <div
                            key={subIdx}
                            className="sidebar-item subcategory subsubcategory"
                            style={{ marginLeft: isOpen ? `${category.labelIndentation + 20}px` : '0' }}
                            onClick={() => {
                              handleSidebarItemClick(subsubcat.name);
                            }}
                          >
                            <div className="subsubcategory-icon">{subsubcat.icon}</div>
                            {isOpen && <div className="sidebar-label">{subsubcat.name}</div>}
                          </div>
                        ))}
                      </>
                    )}
                  </React.Fragment>
                ))}
              </>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="sidebar-add-subject" onClick={onAddSubjectClick}>
        <FaPlus className="plus-icon" />
        {isOpen && <div className="sidebar-label">Add Subject</div>}
      </div>
    </div>
  );
};

export default Sidebar;
