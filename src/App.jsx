import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Table } from './components/Table'
import { Modal } from './components/Modal'

function App() {
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

  return (
    <div className="App">
      <Table 
        data={tableData} 
        onDelete={deleteRow}
        onEdit={editRow}
      />
      <button className='btn' onClick={openAddModal}>Add</button>
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