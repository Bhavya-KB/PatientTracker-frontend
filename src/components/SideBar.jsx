import React from 'react'
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="bg-light border-end vh-100 p-3">
      <h5 className=''>Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/patients">Patients</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/appointments">Appointments</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/doctors">Available Doctors</Link></li>
        {/* <li className="nav-item"><Link className="nav-link" to="/login">Logout</Link></li> */}
      </ul>
    </div>
  );
}

export default SideBar