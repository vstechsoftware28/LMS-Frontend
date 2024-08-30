import React from "react";
import './Leave.css';


const LeaveTable = () => {
    return (
        <>
            <div className="pending">
                <h3 className='h3-leave'>Leave Table(Pending)</h3>
                <table className='table-leave table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Student Id</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Reason</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div className='action-button-leave'>
                                    <button className='add-btn-leave'>Accept</button>
                                    <button className='reject-btn-leave'>Reject</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div className='action-button-leave'>
                                    <button className='add-btn-leave'>Accept</button>
                                    <button className='reject-btn-leave'>Reject</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div className='action-button-leave'>
                                    <button className='add-btn-leave'>Accept</button>
                                    <button className='reject-btn-leave'>Reject</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div className='action-button-leave'>
                                    <button className='add-btn-leave'>Accept</button>
                                    <button className='reject-btn-leave'>Reject</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="accepted">
                <h3 className='h3-leave'>Leave Table(Accepted)</h3>
                <table className='table-leave table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Student Id</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Reason</th>
                            {/* <th scope="col">Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="rejected">
                <h3 className='h3-leave'>Leave Table(Rejected)</h3>
                <table className='table-leave table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Student Id</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Reason</th>
                            {/* <th scope="col">Actions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default LeaveTable;