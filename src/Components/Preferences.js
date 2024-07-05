import React from "react";
import Header from "../Teacher/Header";
import './Preferences.css';
import { FaUser } from 'react-icons/fa';

const Preferences = () => {
    return (
        <>
            <Header />
            <div className="main">
                <div className="info">
                    <div className="name">
                        <span className="icon-with-text">
                            <FaUser style={{ height: '60px', width: '60px' }} />
                            <p> Teacher Name</p>
                        </span>
                    </div>
                    <div className="url">
                        <a href="/">Dashboard</a> /
                        <a href="">Preferences</a>
                    </div>
                </div>
                <div className="preference">
                    <h2>Preferences</h2>
                    <div className="pref">
                        <div className="useracc">
                            <h5>User Account</h5>
                            <ul>
                                <li><a href="/edit-profile">Edit profile</a></li>
                                <li><a href="/reset-password">Change password</a></li>
                                <li><a href="">Prefered language</a></li>
                                <li><a href="">Forum Preference</a></li>
                                <li><a href="">Editor preference</a></li>
                                <li><a href="">Course preference</a></li>
                                <li><a href="/calendar">Calender preference</a></li>
                                <li><a href="">Message preference</a></li>
                                <li><a href="">Notification preference</a></li>
                            </ul>
                        </div>
                        <div className="blog">
                            <h5>Blogs</h5>
                            <ul>
                                <li><a href="">Blog preference</a></li>
                                <li><a href="">External blogs</a></li>
                                <li><a href="">Register an external blog</a></li>
                            </ul>
                        </div>
                        <div className="badges">
                        <h5>Badges</h5>
                        <ul>
                                <li><a href="">Manage badges</a></li>
                                <li><a href="">Badge preference</a></li>
                                <li><a href="">Backpack setting</a></li>
                            </ul>
                    </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Preferences;