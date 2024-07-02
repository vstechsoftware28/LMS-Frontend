import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const GroupsContainer = styled.div`
  padding: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ShowBatchesButton = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
`;

const ShowMembersButton = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
`;

const BatchesModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ModalContent = styled.div`
  width: 100%;
`;

const ModalCloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
`;

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
    <GroupsContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Group</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Members</TableHeader>
            <TableHeader>Batches</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {groupsData.map((group) => (
            <TableRow key={group.id}>
              <TableCell>{group.name}</TableCell>
              <TableCell>{group.description}</TableCell>
              <TableCell>
                {group.members.length}{' '}
                <ShowMembersButton onClick={() => toggleMembersModal(group)}>
                  Show Members
                </ShowMembersButton>
              </TableCell>
              <TableCell>
                {group.batches.length}{' '}
                <ShowBatchesButton onClick={() => toggleBatchesModal(group)}>
                  Show Batches
                </ShowBatchesButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {showMembersModal && selectedGroup && (
        <BatchesModal>
          <ModalContent>
            <h2>All Members of {selectedGroup.name}</h2>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Member Name</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {selectedGroup.members.map((member, index) => (
                  <TableRow key={index}>
                    <TableCell>{member}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
            <ModalCloseButton onClick={() => toggleMembersModal(null)}>Close</ModalCloseButton>
          </ModalContent>
        </BatchesModal>
      )}

      {showBatchesModal && selectedGroup && (
        <BatchesModal>
          <ModalContent>
            <h2>Batches of {selectedGroup.name}</h2>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Batch Name</TableHeader>
                  <TableHeader>Members</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {selectedGroup.batches.map((batch) => (
                  <React.Fragment key={batch.id}>
                    <TableRow>
                      <TableCell>{batch.name}</TableCell>
                      <TableCell>
                        <Table>
                          <tbody>
                            {batch.members.map((member, index) => (
                              <TableRow key={index}>
                                <TableCell>{member}</TableCell>
                              </TableRow>
                            ))}
                          </tbody>
                        </Table>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </tbody>
            </Table>
            <ModalCloseButton onClick={() => setShowBatchesModal(false)}>Close</ModalCloseButton>
          </ModalContent>
        </BatchesModal>
      )}
    </GroupsContainer>
  );
};

export default Groups;
