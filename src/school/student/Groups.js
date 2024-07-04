import React, { useState } from 'react';
import './Groups.css';

// Example data for groups
const groupsData = [
  {
    id: 1,
    name: 'Group A',
    description: 'Description of group',
    members: ['Mr. A', 'Mr. B', 'Mr. C', 'Mr. D'],
    batches: [
      { id: 1, name: 'Batch A', members: ['Mr. A', 'Mr. B'] },
      { id: 2, name: 'Batch B', members: ['Ms. C', 'Ms. D'] }
    ]
  }
];

const Groups = () => {
  const [showBatchesModal, setShowBatchesModal] = useState(false);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Function to toggle modal and set selected group
  const toggleBatchesModal = (group) => {
    setSelectedGroup(group);
    setShowBatchesModal(!showBatchesModal);
  };

  // Function to toggle members modal and set selected group
  const toggleMembersModal = (group) => {
    setSelectedGroup(group);
    setShowMembersModal(!showMembersModal);
  };

  return (
    <div className="groups-container">
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">Group</th>
            <th className="table-header">Description</th>
            <th className="table-header">Members</th>
            <th className="table-header">Batches</th>
          </tr>
        </thead>
        <tbody>
          {groupsData.map((group) => (
            <tr key={group.id} className="table-row">
              <td className="table-cell">{group.name}</td>
              <td className="table-cell">{group.description}</td>
              <td className="table-cell">
                {group.members.length}{' '}
                <button className="show-members-button" onClick={() => toggleMembersModal(group)}>
                  Show Members
                </button>
              </td>
              <td className="table-cell">
                {group.batches.length}{' '}
                <button className="show-batches-button" onClick={() => toggleBatchesModal(group)}>
                  Show Batches
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showMembersModal && selectedGroup && (
        <div className="batches-modal">
          <div className="modal-content">
            <h2>All Members of {selectedGroup.name}</h2>
            <table className="table">
              <thead>
                <tr>
                  <th className="table-header">Member Name</th>
                </tr>
              </thead>
              <tbody>
                {selectedGroup.members.map((member, index) => (
                  <tr key={index} className="table-row">
                    <td className="table-cell">{member}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="modal-close-button" onClick={() => toggleMembersModal(null)}>Close</button>
          </div>
        </div>
      )}

      {showBatchesModal && selectedGroup && (
        <div className="batches-modal">
          <div className="modal-content">
            <h2>Batches of {selectedGroup.name}</h2>
            <table className="table">
              <thead>
                <tr>
                  <th className="table-header">Batch Name</th>
                  <th className="table-header">Members</th>
                </tr>
              </thead>
              <tbody>
                {selectedGroup.batches.map((batch) => (
                  <React.Fragment key={batch.id}>
                    <tr className="table-row">
                      <td className="table-cell">{batch.name}</td>
                      <td className="table-cell">
                        <table className="inner-table">
                          <tbody>
                            {batch.members.map((member, index) => (
                              <tr key={index} className="table-row">
                                <td className="table-cell">{member}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <button className="modal-close-button" onClick={() => setShowBatchesModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Groups;
