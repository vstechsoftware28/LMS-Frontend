import React from "react";
import Header from '../Teacher/Header';
import './Profile.css';
import { FaUser, FaCog } from 'react-icons/fa';

const Profile = ({onEditProfileClick,onDashboard}) => {
    const handleEditProfileClick = () => {
        if(onEditProfileClick){
            onEditProfileClick();
        }
    }

    const handleDashboardClick = () => {
        if(onDashboard){
            onDashboard();
        }
    }
    return (
        <>
            <div className="main-1">
                <div className="info-1">
                    <div className="name">
                        <span className="icon-with-text">
                            <FaUser style={{ height: '60px', width: '60px' }} />
                            <p> Teacher Name</p>
                        </span>
                        <FaCog className="pointer" />
                    </div>
                    <div className="url">
                        <a onClick={handleDashboardClick}>Dashboard</a> /
                        <a >Profile</a>
                        <div className="btton">

                            <h6>Reset Page to default</h6>
                            <h6>Custom this page</h6>
                        </div>
                    </div>

                </div>

                <div className="details">
                    <div className="user-details">
                        <div className="user">
                            <h5>User details</h5>
                            <a style={{color:"#007bff"}} onClick={handleEditProfileClick}>Edit profile</a>
                        </div>
                        <div className="course">
                            <h5>Course details</h5>
                            <h6>Course profile</h6>
                            <ul>
                                <li>Mathematics</li>
                                <li>Chemistry</li>
                                <li>Physics</li>
                            </ul>
                        </div>
                        <div className="misc">
                            <h5>Miscellaneous</h5>
                            <ul>
                                <li>Blog entries</li>
                                <li>Forum posts</li>
                                <li>Fouram discussion</li>
                                <li>Learning plans</li>
                            </ul>
                        </div>
                    </div>
                    <div className="user-details-2">
                        <div className="report">
                            <h5>Reports</h5>
                            <ul>
                                <li>Browser session</li>
                                <li>Grades overview</li>
                            </ul>
                        </div>
                        <div className="login">
                            <h5>Login activity</h5>
                            <h6>First access to site</h6>
                            <p>Thursday,04 July 2024, 02.11 PM</p>
                            <h6>Last access to site</h6>
                            <p>Thursday,04 July 2024, 07.11 PM(now)</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile;