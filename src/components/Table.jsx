import React from 'react'
import './Table.css'
import { MdDelete,MdEdit } from "react-icons/md";
export const Table = () => {
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
            <tr>
               <td>1000</td>
               <td>John</td>
               <td>john@gmail.com</td>
               <td>SDE</td>
               <td>Active</td>
               <td>02/01/2022</td>
               <td>
                  <span><MdEdit /></span>
                  <span><MdDelete /></span>
               </td>
            </tr>
            <tr>
               <td>2000</td>
               <td>Raju</td>
               <td>raju@gmail.com</td>
               <td>Project Manager</td>
               <td>Inactive</td>
               <td>14/02/2022</td>
               <td>
                  <span><MdEdit /></span>
                  <span><MdDelete /></span>
               </td>
            </tr>
         </tbody>
      </table>
    </div>
  )
}
