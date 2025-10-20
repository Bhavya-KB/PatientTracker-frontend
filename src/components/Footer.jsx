import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-3">
            <h6 className='text-warning fs-4'>About </h6>
            <p className="small">
              PatientsTracker is a modern healthcare portal for managing patients, appointments, and  available doctors efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6 className='text-warning fs-4'>Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/dashboard" className="text-white text-decoration-none mt-3">Dashboard</a></li>
              <li><a href="/appointments" className="text-white text-decoration-none mt-3">Appointments</a></li>
              <li><a href="/doctors" className="text-white text-decoration-none mt-3">Available Doctors</a></li>
              <li><a href="/patients" className="text-white text-decoration-none mt-3">Patients</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h6 className='text-warning fs-4'>Contact Us</h6>
            <p className="small mb-1">📍 Nilambur, Kerala, India</p>
            <p className="small mb-1">📞 +91 98765 43210</p>
            <p className="small">📧 support@patientcare.com</p>
          </div>
        </div>

        <hr className="bg-secondary" />
        <small>&copy; 2025 PatientsTracker Portal. All rights reserved.</small>
      </div>
    </footer>
  );
}
