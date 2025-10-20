import React, { useState } from 'react';

function Appointments() {
      const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ patient: '', doctor: '', date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, form]);
    setForm({ patient: '', doctor: '', date: '' });
  };

   const doctorsList = [
    "Dr. Ramesh Kumar - Cardiologist",
    "Dr. Anita Menon - Neurologist",
    "Dr. Rajesh Sharma - Orthopedic",
    "Dr. Meera Nair - Pediatrician",
    "Dr. Arjun Patel - General Physician",
  ];


  

  return (
       <div className="container mt-4">
      <h2>Appointments</h2>
      <form className="row g-3 mb-4" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input name="patient" className="form-control" value={form.patient} onChange={handleChange} placeholder="Patient Name" />
        </div>
       

        <div className="col-md-4">
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
        <div className="col-md-4">
          <input name="date" type="date" className="form-control" value={form.date} onChange={handleChange} />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Book Appointment</button>
        </div>
      </form>

      <ul className="list-group">
        {appointments.map((a, i) => (
          <li key={i} className="list-group-item">
            {a.patient} with {a.doctor} on {a.date}
          </li>
        ))}
      </ul>
    </div>
  );
 
}

export default Appointments