import React from 'react'

import PatientForm from '../components/PatientForm';
import { useNavigate } from 'react-router-dom';
import { addPatient } from '../services/Api';

function AddPatient() {
 const navigate = useNavigate();
  const handleSubmit = (data) => {
    addPatient(data).then(() => navigate('/patients'));
  };
  return <PatientForm onSubmit={handleSubmit} />;
}

export default AddPatient