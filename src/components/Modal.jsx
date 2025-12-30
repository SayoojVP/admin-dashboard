import React from 'react'

import './Modal.css'

export const Modal = ({ closeModal }) => {
  return (
    <div className='modal-container' onClick={(e) => {
      if (e.target.classList.contains('modal-container')) {
        closeModal();
      }
    }}>
      <div className='modal'>
        <form action="">
          <div className='form-group'>
            <label htmlFor="id">ID</label>
            <input name='id' />
          </div>
          <div className='form-group'>
            <label htmlFor="name">Name</label>
            <input name='name' />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email</label>
            <input name='email' />
          </div>
          <div className='form-group'>
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="joined-date">Joined Date</label>
            <input name='joined-date' type='date' />
          </div>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}
