
import React, { useEffect, useState } from 'react';
import PatientForm from '../components/PatientForm';
import { useParams, useNavigate } from 'react-router-dom';
// import { getPatient, updatePatient } from '../services/Api';
import Swal from 'sweetalert2';
import { getPatient, updatePatient,  } from '../services/allApi';

export default function EditPatient() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    getPatient(id).then(res => setPatient(res.data));
  }, [id]);

  const handleSubmit = (data) => {
    updatePatient(id, data).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Patient record has been successfully updated.',
        confirmButtonColor: '#198754'
      }).then(() => {
        navigate('/patients');
      });
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Edit Patient</h2>
      {patient ? (
        <PatientForm onSubmit={handleSubmit} initialData={patient} mode="edit" />
      ) : (
        <div className="alert alert-info">Loading patient data...</div>
      )}
    </div>
  );
}





