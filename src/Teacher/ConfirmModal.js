import React from "react";
import './ConfirmModal.css';
import { FaUser } from 'react-icons/fa';
const ConfirmModal = ({ onDashboard }) => {
    const handleDashboardClick = () => {
        if (onDashboard) {
            onDashboard();
        }
    }
    return (
        <>
            <div className="confirm">
                <div className="confirm-info">
                    <div className="confirm-name">
                        <span className="icon--text">
                            <FaUser style={{ height: '60px', width: '60px' }} />
                            <p> Teacher Name</p>
                        </span>
                    </div>
                    <div className="confirm-url">
                        <a onClick={handleDashboardClick}>Dashboard</a> /
                        <a >Preferences</a>
                    </div>
                </div>

                <div className="delete">
                    <div className="del-box">
                        <div className="con-msg">
                            <p>Confirm</p>
                        </div>
                        <div className="con-para">
                           <p>Are you sure that you want to delete this block titled Timeline?</p> 
                        </div>
                        <div className="btn-class">
                            <button className="yes">Yes</button>
                            <button className="no">No</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ConfirmModal;