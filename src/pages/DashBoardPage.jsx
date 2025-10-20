

import React, { useEffect, useState } from "react";
// import { getPatients } from "../services/Api";
import { FaUserInjured, FaHospitalUser, FaVirus } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";
import { getPatients } from "../services/allApi";

ChartJS.register(ArcElement, Tooltip, Legend);

function DashBoardPage() {
  

   const [patients, setPatients] = useState([]);
  

  useEffect(() => {
    getPatients().then((res) => {
      console.log("Fetched patients:", res.data);
      setPatients(res.data);
    });
  }, []);

  const totalPatients = patients.length;
  const admittedCount = patients.filter((p) => p.admitted).length;
  const dischargedCount = totalPatients - admittedCount;
  const uniqueDiseases = [...new Set(patients.map((p) => p.disease))].length;

  // Pie Chart Data
  const pieData = {
    labels: ["Admitted", "Visiting"],
    datasets: [
      {
        data: [admittedCount, dischargedCount],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverBackgroundColor: ["#45a049", "#e53935"],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { font: { size: 14 } },
      },
    },
  };

  return (
    <>
    <div className="container-fluid dashboard-bg min-vh-100 p-4">
      <h2 className="text-center mb-5 fw-bold text-uppercase text-primary">
     Tracker
      </h2>

      {/* Summary Cards */}
      <div className="row g-4 mb-5 justify-content-center">
        <div className="col-md-4">
          <div className="card dashboard-card shadow-lg border-0 rounded-4 text-center p-3">
            <div className="card-body">
              <FaUserInjured size={40} className="text-primary mb-3" />
              <h5 className="card-title fw-bold">Total Patients</h5>
              <p className="card-text fs-2 fw-bold text-dark">{totalPatients}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card dashboard-card shadow-lg border-0 rounded-4 text-center p-3">
            <div className="card-body">
              <FaHospitalUser size={40} className="text-success mb-3" />
              <h5 className="card-title fw-bold">Admitted Patients</h5>
              <p className="card-text fs-2 fw-bold text-dark">{admittedCount}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card dashboard-card shadow-lg border-0 rounded-4 text-center p-3">
            <div className="card-body">
              <FaVirus size={40} className="text-danger mb-3" />
              <h5 className="card-title fw-bold">Visiting</h5>
              <p className="card-text fs-2 fw-bold text-dark">{dischargedCount}</p>
            </div>
          </div>
        </div>
      </div>

     

      {/* Recent Patients Table */}
      <div className="card shadow-lg border-0 rounded-4 p-3">
        <div className="card-header bg-white border-0">
          <h4 className="fw-bold text-secondary">Recent Patients</h4>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Disease</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.slice(0, 5).map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>{p.disease}</td>
                  <td>
                    {p.admitted ? (
                      <span className="badge bg-success">Admitted</span>
                    ) : (
                      <span className="badge bg-secondary">Visiting</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-end me-3">
          <Link to="/patients" className="btn btn-outline-primary rounded-pill">
            View All Patients
          </Link>
        </div>
      </div>

       {/* Pie Chart Section */}
      <div className="row justify-content-center mb-5 mt-5">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4 p-3 text-center">
            <h5 className="fw-bold text-secondary mb-4">Chart</h5>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>

      {/* Inline Styling */}
      <style jsx="true">{`
        .dashboard-bg {
          background: linear-gradient(135deg, #f8f9fa, #e3f2fd);
        }
        .dashboard-card {
          background: linear-gradient(145deg, #ffffff, #dfe9f3);
          transition: all 0.3s ease;
        }
        .dashboard-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
    </>
  );
  
}

export default DashBoardPage