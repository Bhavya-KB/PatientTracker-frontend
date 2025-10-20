import React from 'react';
import { Link } from 'react-router-dom';

import { FaTrashAlt, FaUserEdit } from 'react-icons/fa';

export default function PatientCard({ patient, onDelete }) {
  return (

    <div className="card h-100 shadow-sm  border border-secondary">
      <div className="card-body">
        {/* Patient Name */}
        <h5 className="card-title text-primary fw-bold mb-3">
          {patient.name}
        </h5>

        {/* Patient Details */}
        <ul className="list-unstyled mb-3">
          <li><strong>Age:</strong> <span className="text-muted">{patient.age}</span></li>
          <li><strong>Condition:</strong> <span className="badge bg-info text-dark">{patient.disease}</span></li>
          <li><strong>Doctor:</strong> <span className="text-muted">{patient.doctor}</span></li>
          <li>
            <strong>Status:</strong>{' '}
            <span className={`badge ${patient.admitted ? 'bg-success' : 'bg-secondary'}`}>
              {patient.admitted ? 'Admitted' : 'Discharged'}
            </span>
          </li>
          <li><strong>History:</strong> <span className="text-muted">{patient.history}</span></li>
        </ul>

        {/* Action Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <Link to={`/edit/${patient.id}`} className="btn btn-sm btn-outline-primary">
            <FaUserEdit /> Edit
          </Link>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(patient.id)}
          >
            <FaTrashAlt /> Delete
          </button>
        </div>
      </div>
    </div>
    // <div className="card mb-3 shadow-sm">
    //   <div className="card-body">
    //     <h5 className="card-title text-warning">{patient.name}</h5>
    //     <p className="card-text">
    //       <strong>Age:</strong> {patient.age}<br />
    //       <strong>Disease:</strong> {patient.disease}<br />
    //       <strong>Doctor:</strong> {patient.doctor}<br />
    //       <strong>Admitted:</strong> {patient.admitted ? 'Yes' : 'No'}<br />
    //       <strong>History:</strong> {patient.history}
    //     </p>
    //     <div className="d-flex justify-content-between">
    //       <Link to={`/edit/${patient.id}`} className="btn btn-primary btn-sm">Edit</Link>
    //       <button className="btn btn-danger btn-sm" onClick={() => onDelete(patient.id)}>Delete</button>
    //     </div>
    //   </div>
    // </div>
  );
}
