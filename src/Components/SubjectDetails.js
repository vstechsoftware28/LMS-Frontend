// import React, { useState } from "react";
// import './SubjectDetails.css';
// import Header from "../Teacher/Header";
// import { FaCaretDown, FaCog, FaCogs, FaPen, FaFilter, FaRegFileArchive, FaLevelUpAlt, FaArrowLeft } from 'react-icons/fa';
// import { FcComments } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";


// const SubjectDetails = () => {
//     const [isDropdownVisible, setDropdownVisible] = useState(false);
//     const navigate = useNavigate();

//     const toggleDropdown = () => {
//         setDropdownVisible(!isDropdownVisible);
//     };
//     const handleTurnEditing = () => {
//         navigate('/edit-subject-details')
//     }

//     return (
//         <>
//             <Header />
//             <div className="subject-details">
//                 <div className="basic-info">
//                     <div className="sub-name">
//                         <span className="icon-text">
//                             <p>Mathematics</p>
//                         </span>
//                         <span className="pointer" onClick={toggleDropdown}>
//                             <FaCog /><FaCaretDown />

//                         </span>
//                     </div>
//                     <div className="url">
//                         <a href="/">Dashboard</a> /
//                         <a href="">Subjects</a> / 
//                         <a href="">Mathematics</a>
//                     </div>
//                 </div>
//                 {isDropdownVisible && (
//                     <div className="dropdown">
//                         <ul>
//                             <li><FaCogs />Edit settings</li>
//                             <li onClick={handleTurnEditing}>< FaPen />Turn editing on</li>
//                             <li><FaCogs />Course completion</li>
//                             <li><FaFilter />Filters</li>
//                             <li><FaCogs />Grandbook setup</li>
//                             <li><FaRegFileArchive />Backup</li>
//                             <li><FaLevelUpAlt />Restore</li>
//                             <li><FaLevelUpAlt />Import</li>
//                             <li><FaArrowLeft />Reset</li>
//                             <li><FaCog />More...</li>
//                         </ul>
//                     </div>
//                 )}
//                 <div className="subject-view">
//                     <div className="annoucement">
//                         <h5><FcComments />Annoucements</h5>
//                     </div><hr></hr>
//                     <div className="topic-1">
//                         <h3>Topic 1</h3>
//                     </div><hr></hr>
//                     <div className="topic-2">
//                         <h3>Topic 2</h3>
//                     </div><hr></hr>
//                     <div className="topic-3">
//                         <h3>Topic 3</h3>
//                     </div><hr></hr>
//                     <div className="topic-4">
//                         <h3>Topic 4</h3>
//                     </div><hr></hr>
//                     <div className="topic-5">
//                         <h3>Topic 5</h3>
//                     </div>

//                 </div>
//             </div>


//         </>
//     )
// }

// export default SubjectDetails;