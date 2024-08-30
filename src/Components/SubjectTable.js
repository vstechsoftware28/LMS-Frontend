import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SubjectTable.css'
const SubjectTable = () => {
    //   const [subjects, setSubjects] = useState([
    //     { code: '', name: '', description: '', credit: '' }
    //   ]);

    //   const handleAddRow = () => {
    //     setSubjects([...subjects, { code: '', name: '', description: '', credit: '' }]);
    //   };

    //   const handleDeleteRow = (index) => {
    //     const newSubjects = subjects.filter((_, i) => i !== index);
    //     setSubjects(newSubjects);
    //   };

    //   const handleInputChange = (index, field, value) => {
    //     const newSubjects = [...subjects];
    //     newSubjects[index][field] = value;
    //     setSubjects(newSubjects);
    //   };

    return (
        <>
            <h2 className='h2'>Subject Table</h2>
            <table className='table-subject table-bordered'>
                <thead className='thead-light'>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Subject Code</th>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Teacher Name</th>
                        <th scope="col">Class Name</th>
                        <th scope="col">Division</th>
                        <th scope="col">Description</th>
                        <th scope="col">Credit</th>
                        <th scope="col">File</th>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className='action-button-subject'>
                                <button className='add-btn-subject'>Edit</button>
                                <button className='delete-btn-subject'>Delete</button>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className='action-button-subject'>
                                <button className='add-btn-subject'>Edit</button>
                                <button className='delete-btn-subject'>Delete</button>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className='action-button-subject'>
                                <button className='add-btn-subject'>Edit</button>
                                <button className='delete-btn-subject'>Delete</button>
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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <div className='action-button-subject'>
                                <button className='add-btn-subject'>Edit</button>
                                <button className='delete-btn-subject'>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <head />
        </>
    );
};

export default SubjectTable;
