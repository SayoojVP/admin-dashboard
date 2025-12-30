import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Table } from './components/Table'
import { Modal } from './components/Modal'

function App() {
  const[modalOpen,setModalOpen]=useState(false);

  return (
    <div className="App">
     <Table />
     <button className='btn' onClick={() => setModalOpen(true)}>Add</button>
     {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </div>
  )
}

export default App
