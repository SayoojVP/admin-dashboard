import React from 'react'
import './Sidebar.css'
import { FaUsers, FaHome, FaCog } from 'react-icons/fa'

export const Sidebar = ({ activeTab, setActiveTab, isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className='sidebar-header'>
        <h2>{isOpen && 'Admin Dashboard'}</h2>
        <button className='close-btn' onClick={toggleSidebar}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <nav className='sidebar-nav'>
        <ul>
          <li 
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => setActiveTab('home')}
            title="Home"
          >
            <FaHome />
            {isOpen && <span>Home</span>}
          </li>
          <li 
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
            title="Users"
          >
            <FaUsers />
            {isOpen && <span>Users</span>}
          </li>
          <li 
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
            title="Settings"
          >
            <FaCog />
            {isOpen && <span>Settings</span>}
          </li>
        </ul>
      </nav>
    </div>
  )
}