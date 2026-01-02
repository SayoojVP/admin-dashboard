import React, { useState, useEffect } from 'react'
import './Modal.css'

export const Modal = ({ closeModal, onSubmit, editData }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    role: '',
    status: 'Active'
  });

  // Fill form with edit data when in edit mode
  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id && formData.name && formData.email && formData.role) {
      onSubmit(formData);
    }
  };

  // Close modal when clicking on backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <h2>{editData ? 'Edit User' : 'Add New User'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID:</label>
            <input 
              type="number" 
              name="id"
              value={formData.id}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Name:</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Role:</label>
            <input 
              type="text" 
              name="role"
              value={formData.role}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Status:</label>
            <select 
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          
          <button type="submit" className="btn">
            {editData ? 'Update' : 'Submit'}
          </button>
          <button type="button" className="btn" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  )
}