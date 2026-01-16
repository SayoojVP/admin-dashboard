import React from 'react'
import './Table.css'
import { MdDelete, MdEdit } from "react-icons/md";

export const Table = ({ data, onDelete, onEdit }) => {
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Joined Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.role}</td>
              <td>
                <span className={`status-badge ${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
              </td>
              <td>{row.joinedDate}</td>
              <td>
                <span 
                  onClick={() => onEdit(row)} 
                  style={{cursor: 'pointer', marginRight: '10px', color: '#007bff'}}
                >
                  <MdEdit />
                </span>
                <span 
                  onClick={() => onDelete(row.id)} 
                  style={{cursor: 'pointer', color: '#dc3545'}}
                >
                  <MdDelete />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}