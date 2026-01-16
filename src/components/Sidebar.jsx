import React from 'react'
import './Sidebar.css'
import { FaUsers, FaHome, FaCog } from 'react-icons/fa'

export const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <h2>Admin Dashboard</h2>
      </div>
      <nav className='sidebar-nav'>
        <ul>
          <li 
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => setActiveTab('home')}
          >
            <FaHome />
            <span>Home</span>
          </li>
          <li 
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
          >
            <FaUsers />
            <span>Users</span>
          </li>
          <li 
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
          >
            <FaCog />
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}