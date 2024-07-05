import React, { useState } from "react";
import Header from "../Teacher/Header";
import './EditProfile.css';
import { FaUser, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { FcDown } from "react-icons/fc";


const EditProfile = () => {
    const [expandAll, setExpandAll] = useState(false);
    const [generalExpanded, setGeneralExpanded] = useState(true);
    const [userPictureExpanded, setUserPictureExpanded] = useState(false);
    const [additionalNameExpanded, setAdditionalNameExpanded] = useState(false);
    const [interestsExpanded, setInterestsExpanded] = useState(false);
    const [optionalExpanded, setOptionalExpanded] = useState(false);
    const [academicExpanded, setAcademicExpanded] = useState(false);

    const toggleExpandAll = () => {
        setExpandAll(!expandAll);
        setGeneralExpanded(!expandAll);
        setUserPictureExpanded(!expandAll);
        setAdditionalNameExpanded(!expandAll);
        setInterestsExpanded(!expandAll);
        setOptionalExpanded(!expandAll);
        setAcademicExpanded(!expandAll);
    };
    const toggleGeneral = () => {
        setGeneralExpanded(!generalExpanded);
    };
    const toggleUserPicture = () => {
        setUserPictureExpanded(!userPictureExpanded);
    };
    const toggleAdditionalName = () => {
        setAdditionalNameExpanded(!additionalNameExpanded);
    }
    const toggleInterests = () => {
        setInterestsExpanded(!interestsExpanded);
    }
    const toggleOptional = () => {
        setOptionalExpanded(!optionalExpanded);
    }
    const toggleAcademic = () => {
        setAcademicExpanded(!academicExpanded);
    }
    const onSubmit = (data) => {
       
        console.log(data);
       
        alert('Form submitted successfully');
        
        // reset();
    };
    return (
        <>
            <Header />
            <div className="edit-profile">
                <div className="basic-info">
                    <div className="teacher-name">
                        <span className="icon-text">
                            <FaUser style={{ height: '60px', width: '60px' }} />
                            <p> Teacher Name</p>
                        </span>
                    </div>
                    <div className="profile-url">
                        <a href="/">Dashboard</a> /
                        <a href="">Preferences</a> /
                        <a href="">Edit Profile</a>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="edit-form">
                        <h5>Teacher Name</h5>
                        <a className="expand" onClick={toggleExpandAll}>
                            {expandAll ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                            Expand all</a>
                        <div className={`general ${generalExpanded ? 'expanded' : 'collapsed'}`}>
                            <h6 className="h6" onClick={toggleGeneral}>
                                {generalExpanded ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                                General</h6>
                            <div className="form">
                                <lable>First Name</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Surname</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Email address</lable>
                                <input type="email" />
                            </div>
                            <div className="form">
                                <lable>Email display</lable>
                                <input type="email" />
                            </div>
                            <div className="form">
                                <lable>City/town</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Select a country</lable>
                                <select  >
                                    <option value=''>Select a country...</option>
                                    <option value='1'>India</option>
                                    <option value='2'>America</option>
                                </select>
                            </div>
                            <div className="form">
                                <lable>TimeZone</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Description</lable>
                                <textarea rows={8} type="text" />
                            </div>
                        </div><hr />
                        <div className={`user-picture ${userPictureExpanded ? 'expanded' : 'collapsed'}`}>
                            <h6 className="h6" onClick={toggleUserPicture}>
                                {userPictureExpanded ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                                User Picture</h6>
                            <div className="form">
                                <lable>Current Picture</lable>
                                {/* <input type="text" /> */}
                            </div>
                            <div className="form">
                                <lable >New picture</lable>
                                <div className="file-input-container">
                                    <input id="fileUpload" style={{ width: '550px', height: '150px' }} type="file" />

                                    <span className="file-instructions">
                                        <span ><FcDown className="file-icon" size={50} /></span>
                                        <span>You can drag and drop file here to add them.</span>
                                    </span>
                                </div>
                                <div className="photo">
                                    <p>Accepted file types:</p>
                                    <p>Image files used on the web <span className="p-type">.gif,.jpe,.jpeg,.jpg,.png,.svg,.svgz</span></p>
                                </div>
                            </div>

                            <div className="form">
                                <lable>Picture description</lable>
                                <input type="text" />
                            </div>
                        </div><hr />
                        <div className={`additional-name ${additionalNameExpanded ? 'expanded' : 'collapsed'}`}>
                            <h6 className="h6" onClick={toggleAdditionalName}>
                                {additionalNameExpanded ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                                Additional names</h6>
                            <div className="form">
                                <lable>First name</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Surname</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Middle name</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Alternative name</lable>
                                <input type="text" />
                            </div>
                        </div><hr />
                        <div className={`interests ${interestsExpanded ? 'expanded' : 'collapsed'}`}>
                            <h6 className="h6" onClick={toggleInterests}>
                                {interestsExpanded ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                                Interests</h6>
                            <div className="form">
                                <lable>List of interests</lable>
                                <input type="text" placeholder="Enter tags..." />
                            </div>
                        </div><hr />
                        <div className={`optional ${optionalExpanded ? 'expanded' : 'collapsed'}`}>
                            <h6 className="h6" onClick={toggleOptional}>
                                {optionalExpanded ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                                Optional</h6>
                            <div className="form">
                                <lable>Web page</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>ICQ number</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Skype ID</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>AIM ID</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Yahoo ID</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>MSN ID</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>ID number</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Institution</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Department</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Phone</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Mobile phone</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Address</lable>
                                <input type="text" />
                            </div>
                        </div><hr />
                        <div className={`academic ${academicExpanded ? 'expanded' : 'collapsed'}`}>
                            <h6 className="h6" onClick={toggleAcademic}>
                                {academicExpanded ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                                Academic</h6>
                            <div className="form">
                                <lable>Admission Year</lable>2024
                                {/* <input type="text" /> */}
                            </div>
                            <div className="form">
                                <lable>School</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Department</lable>Science
                                {/* <input type="text" /> */}
                            </div>
                            <div className="form">
                                <lable>PRN</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Roll No</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>User Type</lable>Teacher
                                {/* <input type="text" /> */}
                            </div>
                        </div><hr />
                        <button className="update" type="submit">Update profile</button>
                        <button className="cancle" >Cancel</button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default EditProfile;