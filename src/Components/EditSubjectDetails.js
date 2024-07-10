import React, { useState, useEffect } from "react";
import './EditSubjectsDetails.css';
import {FaCaretDown, FaCog, FaCogs, FaPen, FaUser, FaFilter, FaGenderless, FaRegFileArchive, FaLevelUpAlt,
    FaArrowLeft, FaArrowsAlt, FaPlus, FaEye, FaTrashAlt} from 'react-icons/fa';
import { FcComments } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const EditSubjectDetails = ({onEditTopic}) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [editMode, setEditMode] = useState(null);
    const [visibleDropdownTopic, setVisibleDropdownTopic] = useState(null);
    const navigate = useNavigate();
    const [topicNames, setTopicNames] = useState({
        1: "Topic 1",
        2: "Topic 2",
        3: "Topic 3",
        4: "Topic 4",
        5: "Topic 5"
    });

    useEffect(() => {
        const storedTopicNames = JSON.parse(localStorage.getItem('topicNames'));
        if (storedTopicNames) {
            setTopicNames(storedTopicNames);
        }
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleEditClick = (topicNumber) => {
        setEditMode(topicNumber);
    };

    const handleInputChange = (e, topicNumber) => {
        const newTopicNames = {
            ...topicNames,
            [topicNumber]: e.target.value
        };
        setTopicNames(newTopicNames);
        localStorage.setItem('topicNames', JSON.stringify(newTopicNames));
    };

    const handleBlur = () => {
        setEditMode(null);
    };

    const toggleTopicDropdown = (topicNumber) => {
        setVisibleDropdownTopic(visibleDropdownTopic === topicNumber ? null : topicNumber);
    };
const handleEditTopic = () => {
    if(onEditTopic){
        onEditTopic();
    }
}
    return (
        <>
            <div className="edit-subject-details">
                <div className="edit-basic-info">
                    <div className="edit-sub-name">
                        <span className="edit-icon-text">
                            <p>Mathematics</p>
                        </span>
                        <span className="edit-pointer" onClick={toggleDropdown}>
                            <FaCog /><FaCaretDown />
                        </span>
                    </div>
                    <div className="edit-url">
                        <a href="/">Dashboard</a> /
                        <a href="">Subjects</a> /
                        <a href="">Mathematics</a>
                    </div>
                </div>
                {isDropdownVisible && (
                    <div className="edit-dropdown">
                        <ul>
                            <li><FaCogs />Edit settings</li>
                            <li>< FaPen />Turn editing on</li>
                            <li><FaCogs />Course completion</li>
                            <li><FaFilter />Filters</li>
                            <li><FaCogs />Grandbook setup</li>
                            <li><FaRegFileArchive />Backup</li>
                            <li><FaLevelUpAlt />Restore</li>
                            <li><FaLevelUpAlt />Import</li>
                            <li><FaArrowLeft />Reset</li>
                            <li><FaCog />More...</li>
                        </ul>
                    </div>
                )}
                <div className="edit-subject-view">
                    <div className="edit-annoucement">
                        <a style={{ color: 'skyblue' }}>Edit<FaCaretDown /></a>
                        <span className="edit-span">
                            <FaArrowsAlt /><FcComments /><h5>Annoucements</h5>< FaPen />
                            <span className="Fa-edit">Edit<FaCaretDown /></span><FaUser />
                        </span>
                        <span className="acti">
                            <FaPlus />
                            <a style={{ color: 'skyblue' }}>Add an activity or resources</a>
                        </span>
                    </div><hr></hr>
                    {[1, 2, 3, 4, 5].map((topicNumber) => (
                        <div key={topicNumber} className={`edit-topic-${topicNumber}`}>
                            <div className="txt">
                                <span className="topic-name">
                                    <h3>
                                        <FaArrowsAlt />
                                        {editMode === topicNumber ? (
                                            <input
                                                type="text"
                                                value={topicNames[topicNumber]}
                                                onChange={(e) => handleInputChange(e, topicNumber)}
                                                onBlur={handleBlur}
                                                autoFocus
                                            />
                                        ) : (
                                            topicNames[topicNumber]
                                        )}
                                        < FaPen onClick={() => handleEditClick(topicNumber)} />
                                    </h3>
                                    <a style={{ color: 'skyblue' }} onClick={() => toggleTopicDropdown(topicNumber)}>Edit<FaCaretDown /></a>
                                    {visibleDropdownTopic === topicNumber && (
                                        <div className="topic-dropdown">
                                            <ul>
                                                <li onClick={handleEditTopic}><FaCogs />Edit topic</li>
                                                <li><FaGenderless />Highlight</li>
                                                <li><FaEye />Hide topic</li>
                                                <li><FaTrashAlt />Delete topic</li>
                                            </ul>
                                        </div>
                                    )}
                                </span>
                                <span className="activity">
                                    <FaPlus />
                                    <a style={{ color: 'skyblue' }}>Add an activity or resources</a>
                                </span>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default EditSubjectDetails;
