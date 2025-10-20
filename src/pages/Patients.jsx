
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import PatientCard from '../components/PatientCard';
import { deletePatient, getPatients } from '../services/allApi';
// import { deletePatient, getPatients } from '../services/Api';

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getPatients().then(res => setPatients(res.data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This patient record will be permanently deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        deletePatient(id).then(() => {
          setPatients(patients.filter(p => p.id !== id));
          Swal.fire('Deleted!', 'Patient record has been removed.', 'success');
        });
      }
    });
  };

  // 🔍 Filter patients based on search term
  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.disease.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="bg-light p-4 rounded shadow-sm mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">👩‍⚕️ Patient List</h2>
          <Link to="/add" className="btn btn-success">+ Add New Patient</Link>
        </div>

        {/* Search Input */}
        {/* <input
          type="text"
          className="form-control mx-2"
          placeholder="Search by name, condition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}

        <div className="d-flex justify-content-start">
  <input
    type="text"
    className="form-control"
    style={{ maxWidth: '600px' }}
    placeholder="Search by name, disease....."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

      </div>

      {/* Patient Cards */}
      {filteredPatients.length === 0 ? (
        <div className="alert alert-info">No matching patients found.</div>
      ) : (
        <div className="row">
          {filteredPatients.map(patient => (
            <div key={patient.id} className="col-md-6 col-lg-4 mb-4">
              <PatientCard patient={patient} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



// import React, { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import PatientCard from '../components/PatientCard';
// import { deletePatient, getPatients } from '../services/Api';

// export default function Patients() {
//   const [patients, setPatients] = useState([]);

//   useEffect(() => {
//     getPatients().then(res => setPatients(res.data));
//   }, []);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'This patient record will be permanently deleted.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'Cancel'
//     }).then(result => {
//       if (result.isConfirmed) {
//         deletePatient(id).then(() => {
//           setPatients(patients.filter(p => p.id !== id));
//           Swal.fire('Deleted!', 'Patient record has been removed.', 'success');
//         });
//       }
//     });
//   };

//   return (
//     <div className="container mt-4">
//  <div className="bg-light p-4 rounded shadow-sm mb-4 d-flex justify-content-between align-items-center">
//         <h2 className="mb-0">👩‍⚕️ Patient List</h2>
//         <Link to="/add" className="btn btn-success">
//           + Add New Patient
//         </Link>
//       </div>

//        {patients.length === 0 ? (
//         <div className="alert alert-info">No patients found. Add one to get started.</div>
//      ) : (
//        <div className="row">
//            {patients.map(patient => (
//              <div key={patient.id} className="col-md-6 col-lg-4">
//              <PatientCard patient={patient} onDelete={handleDelete} />
//              </div>
//           ))}
//         </div>
//       )}
//      </div>
//   );
//  }


