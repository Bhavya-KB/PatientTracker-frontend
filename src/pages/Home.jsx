
//OLD

// import React, { useState } from "react";
// import { FaUserPlus } from "react-icons/fa";
// import Swal from "sweetalert2";
// import { addPatientAPI } from "../service/allAPIS";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [showModal, setShowModal] = useState(false);
//   const [userInputs, setPatientData] = useState({
//     patientFields: { name: "", age: "", condition: "", contact: "" },
//   });

//   const navigate = useNavigate();

//   // Add patient
//   const addPatientDatas = async () => {
//     const { name, age, condition, contact } = userInputs.patientFields;

//     if (name && age && condition && contact) {
//       await addPatientAPI(userInputs);

//       Swal.fire({
//         title: "Patient Added Successfully!",
//         icon: "success",
//         confirmButtonText: "OK",
//         confirmButtonColor: "#28a745",
//         draggable: true,
//       });

//       setShowModal(false);
//       setPatientData({ patientFields: { name: "", age: "", condition: "", contact: "" } });
//        navigate("/list");
//     } else {
//       Swal.fire({
//         title: "Fill all the details!",
//         icon: "warning",
//         confirmButtonText: "OK",
//         confirmButtonColor: "#dc3545",
//         draggable: true,
//       });
//     }
//   };

//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-light">
//       <div className="p-5 bg-white rounded-4 shadow-lg" style={{ maxWidth: "500px" }}>
//         <h1 className="text-primary fs-1 mb-2">🏥 Patient Record System</h1>
//         <p className="text-muted ">Click the button below to add a new patient.</p>
//         <button className="btn btn-success px-4 py-2 mt-3" onClick={() => setShowModal(true)}>
//           <FaUserPlus className="me-2" />
//           Add Patient
//         </button>
//       </div>

//       {/* ADD MODAL */}
//       {showModal && (
//         <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header bg-primary text-white">
//                 <h5 className="modal-title">Add New Patient</h5>
//                 <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   {["name", "age", "condition", "contact"].map((field) => (
//                     <div className="mb-3 text-start text-capitalize" key={field}>
//                       <label className="form-label   ">{field}</label>
//                       <input
//                         value={userInputs.patientFields[field]}
//                         onChange={(e) =>
//                           setPatientData({
//                             ...userInputs,
//                             patientFields: { ...userInputs.patientFields, [field]: e.target.value },
//                           })
//                         }
//                         type={field === "age" ? "number" : "text"}
//                         className="form-control"
//                         placeholder={`Enter ${field}`}
//                       />
//                     </div>
//                   ))}
//                   <div className="text-center">
//                     <button type="button" onClick={addPatientDatas} className="btn btn-success px-5 mt-2">
//                       <FaUserPlus className="me-2" />
//                       Add
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;
















