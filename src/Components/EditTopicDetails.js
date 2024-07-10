import React, { useState } from "react";
import './EditTopicDetails.css';
import { FaUser, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const EditTopicDetails = () => {
    const [expandAll, setExpandAll] = useState(false);
    const [generalExpanded, setGeneralExpanded] = useState(true);
    const [restrictExpanded, setRestrictExpanded] = useState(false);

    const toggleExpandAll = () => {
        setExpandAll(!expandAll);
        setGeneralExpanded(!expandAll);
        setRestrictExpanded(!expandAll);
    };

    
    const toggleGeneral = () => {
        setGeneralExpanded(!generalExpanded);
    };
    
    const toggleInterests = () => {
        setRestrictExpanded(!restrictExpanded);
    }
    
    const onSubmit = (data) => {
       
        console.log(data);
       
        alert('Form submitted successfully');
        
        // reset();
    };
    return (
        <>
            <div className="topic-detail">
                <div className="topic-info">
                    <div className="topic-name">
                        <span className="topic-text">
                            <p>Mathematics</p>
                        </span>
                    </div>
                    <div className="topic-url">
                        <a href="/">Dashboard</a> /
                        <a href="">Subjects</a> /
                        <a href="">Mathematics</a> /
                        <a href="">Edit Basic Mathematics</a>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="topic-form">
                        <h5>Summary of Basic Mathematics</h5>
                        <a className="expand" onClick={toggleExpandAll}>
                            {expandAll ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                            Expand all</a>
                        <div className={`general ${generalExpanded ? 'expanded' : 'collapsed'}`}>
                            <h6 className="h6" onClick={toggleGeneral}>
                                {generalExpanded ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                                General</h6>
                            <div className="form">
                                <lable>Section Name</lable>
                                <input type="text" />
                            </div>
                            <div className="form">
                                <lable>Summary</lable>
                                <textarea rows={12} type="text" />
                            </div>
                        </div><hr />
                        <div className={`restrict ${restrictExpanded ? 'expanded' : 'collapsed'}`}>
                            <h6 className="h6" onClick={toggleInterests}>
                                {restrictExpanded ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                                Restrics Access</h6>
                            <div className="form">
                                <lable>List of restrict</lable>
                                <input type="text" placeholder="Enter tags..." />
                            </div>
                        </div><hr />
                        <button className="update" type="submit">Update topic</button>
                        <button className="cancle" >Cancel</button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default EditTopicDetails;