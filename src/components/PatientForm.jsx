
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function PatientForm({ onSubmit, initialData = {},mode = 'add' }) {
  const [form, setForm] = useState({
    name: '',
    age: '',
    disease: '',
    admitted: false,
    doctor: '',
    history: ''
  });

  // Only update form if initialData has values
  useEffect(() => {
    if (Object.keys(initialData).length > 0) {
      setForm({
        name: initialData.name || '',
        age: initialData.age || '',
        disease: initialData.disease || '',
        admitted: initialData.admitted || false,
        doctor: initialData.doctor || '',
        history: initialData.history || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
      // SweetAlert based on mode
    Swal.fire({
      icon: mode === 'edit' ? 'success' : 'success',
      title: mode === 'edit' ? 'Patient Updated!' : 'Patient Saved!',
      text: mode === 'edit' ? 'The patient record has been updated successfully.' : 'New patient has been added successfully.',
      confirmButtonText: 'OK'
    });
  };

  const doctorsList = [
    "Dr. Ramesh Kumar - Cardiologist",
    "Dr. Anita Menon - Neurologist",
    "Dr. Rajesh Sharma - Orthopedic",
    "Dr. Meera Nair - Pediatrician",
    "Dr. Arjun Patel - General Physician",
  ];

  return (
    <form className="p-3 border rounded bg-white" onSubmit={handleSubmit}>
      <h4 className="mb-3">{initialData.name ? 'Edit Patient' : 'Add New Patient'}</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input name="age" type="number" className="form-control" value={form.age} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Condition</label>
        <input name="disease" className="form-control" value={form.disease} onChange={handleChange} required />
      </div>
      

       <div className="mb-3">
          <select
            name="doctor"
            className="form-select"
            value={form.doctor}
            onChange={handleChange}
          >
            <option value="">Select Doctor</option>
            {doctorsList.map((doc, i) => (
              <option key={i} value={doc}>
                {doc}
              </option>
            ))}
          </select>
        </div>
      <div className="mb-3 mt-3">
        <label className="form-label">Medical History</label>
        <textarea name="history" className="form-control" value={form.history} onChange={handleChange} />
      </div>
      <div className="form-check mb-3">
        <input type="checkbox" className="form-check-input" name="admitted" checked={form.admitted} onChange={handleChange} />
        <label className="form-check-label">Admitted</label>
      </div>
      <button type="submit" className="btn btn-success"> {mode === 'edit' ? 'Update' : 'Save'}</button>
    </form>
  );
}

export default PatientForm;



