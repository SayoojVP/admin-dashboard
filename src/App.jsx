import { useState } from 'react'
import './App.css'
import { Table } from './components/Table'
import { Modal } from './components/Modal'
import { Sidebar } from './components/Sidebar'

function App() {
  // Tab navigation state
  const [activeTab, setActiveTab] = useState('users');
  
  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  
  // State to manage table data
  const [tableData, setTableData] = useState([
    {
      id: 1000,
      name: "John",
      email: "john@gmail.com",
      role: "SDE",
      status: "Active",
      joinedDate: "02/01/2022"
    },
    {
      id: 2000,
      name: "Raju", 
      email: "raju@gmail.com",
      role: "Project Manager",
      status: "Inactive",
      joinedDate: "14/02/2022"
    }
  ]);

  // Function to add/update row
  const handleSubmit = (formData) => {
    if (editData) {
      // Update existing row
      setTableData(tableData.map(row => 
        row.id === editData.id ? { ...formData, joinedDate: row.joinedDate } : row
      ));
    } else {
      // Add new row
      const newRow = {
        ...formData,
        id: parseInt(formData.id),
        joinedDate: new Date().toLocaleDateString()
      };
      setTableData([...tableData, newRow]);
    }
    setModalOpen(false);
    setEditData(null);
  };

  // Function to delete row
  const deleteRow = (id) => {
    setTableData(tableData.filter(row => row.id !== id));
  };

  // Function to edit row
  const editRow = (rowData) => {
    setEditData(rowData);
    setModalOpen(true);
  };

  // Function to open add modal
  const openAddModal = () => {
    setEditData(null);
    setModalOpen(true);
  };

  // Render content based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className='dashboard-content'>
            <h1>Welcome to Admin Dashboard</h1>
            <p>Select a menu item from the sidebar to get started.</p>
          </div>
        );
      case 'users':
        return (
          <div className='dashboard-content'>
            <div className='content-header'>
              <h1>User Management</h1>
              <button className='btn' onClick={openAddModal}>Add User</button>
            </div>
            <Table 
              data={tableData} 
              onDelete={deleteRow}
              onEdit={editRow}
            />
          </div>
        );
      case 'settings':
        return (
          <div className='dashboard-content'>
            <h1>Settings</h1>
            <p>Settings page coming soon...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className='main-content'>
        {renderContent()}
      </div>
      {modalOpen && (
        <Modal 
          closeModal={() => {
            setModalOpen(false);
            setEditData(null);
          }} 
          onSubmit={handleSubmit}
          editData={editData}
        />
      )}
    </div>
  )
}

export default App