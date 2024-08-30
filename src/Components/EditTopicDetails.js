import React, { useState } from "react";
import './EditTopicDetails.css';
import axios from "axios";
import { FaUser, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const EditTopicDetails = ({onDashboard}) => {
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
    const handleDashboardClick = () => {
        if(onDashboard){
            onDashboard();
        }
    }

    // const onSubmit = (data) => {
    //     console.log(data);
    //     alert('Form submitted successfully');
    //     // reset();
    // };

const onSubmit = async (data) => {
    try {
        const response = await axios.post('http://localhost//8080/', data);
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}
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
                        <a onClick={handleDashboardClick}>Dashboard</a> /
                        <a >Subjects</a> /
                        <a >Mathematics</a> /
                        <a >Edit Basic Mathematics</a>
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
                            <div className="form-topic">
                                <lable>Section Name</lable>
                                <input type="text" />
                            </div>
                            <div className="form-topic">
                                <lable>Summary</lable>
                                <textarea rows={12} type="text" />
                            </div>
                        </div><hr />
                        <div className={`restrict ${restrictExpanded ? 'expanded' : 'collapsed'}`}>
                            <h6 className="h6" onClick={toggleInterests}>
                                {restrictExpanded ? <FaChevronDown className="dropdown-icon" /> : <FaChevronRight className="dropdown-icon" />}
                                Restrics Access</h6>
                            <div className="form-topic">
                                <lable>List of restrict</lable>
                                <input type="text" placeholder="Enter tags..." />
                            </div>
                        </div><hr />
                        <div className="topic-btn">
                            <button className="update" type="submit">Update topic</button>
                            <button className="cancle-2" >Cancel</button>
                        </div>


                    </div>
                </form>
            </div>
        </>
    )
}

export default EditTopicDetails;