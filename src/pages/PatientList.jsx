

//OLD


// import React, { useState, useEffect } from "react";
// import { FaEdit } from "react-icons/fa";
// import Swal from "sweetalert2";
// import { getAllPatientsAPI, getPatientAPI, updatePatientAPI } from "../service/allAPIS";

// function PatientList() {
//   const [patients, setPatients] = useState([]);
//   const [editModal, setEditModal] = useState(false);
//   const [selectedPatient, setSelectedPatient] = useState(null);
//   const [userInputs, setPatientData] = useState({
//     patientFields: { name: "", age: "", condition: "", contact: "" },
//   });

//   //getall patients

//   const fetchPatients = async () => {
//     try {
//       const result = await getAllPatientsAPI();
//       setPatients(result.data);
//     } catch (err) {
//       console.error("Error fetching patients:", err);
//     }
//   };

//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   //getsingle patient

//   const handleEdit = async (id) => {
//     try {
//       const result = await getPatientAPI(id);
//       setSelectedPatient(result.data);
//       setPatientData({ patientFields: result.data.patientFields });
//       setEditModal(true);
//     } catch (error) {
//       console.error("Failed to fetch patient:", error);
//       Swal.fire({ title: "Failed to load patient data!", icon: "error" });
//     }
//   };

//   //update

//   const updatePatientData = async () => {
//     const { name, age, condition, contact } = userInputs.patientFields;
//     if (name && age && condition && contact) {
//       await updatePatientAPI(selectedPatient.id, userInputs);
//       Swal.fire({ title: "Patient Updated Successfully!", icon: "success" });
//       setEditModal(false);
//       fetchPatients();
//     } else {
//       Swal.fire({ title: "Fill all the details!", icon: "warning" });
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Patient List</h2>
//       <div className="row justify-content-center">
       
//         {  patients.map((p) => (
//             <div key={p.id} className="col-md-4 mb-3">
//               <div className="card p-3 shadow-sm text-start">
//                 <h5>{p.patientFields.name}</h5>
//                 <p>Age: {p.patientFields.age}</p>
//                 <p>Condition: {p.patientFields.condition}</p>
//                 <p>Contact: {p.patientFields.contact}</p>
//                 <div className="text-end">
//                   <button className="btn btn-primary btn-sm" onClick={() => handleEdit(p.id)}>
//                     <FaEdit className="me-1" />
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>

//       {/* EDIT MODAL */}
//       {editModal && (
//         <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header bg-danger text-white">
//                 <h5 className="modal-title">Edit Patient</h5>
//                 <button type="button" className="btn-close" onClick={() => setEditModal(false)}></button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   {["name", "age", "condition", "contact"].map((field) => (
//                     <div className="mb-3" key={field}>
//                       <label className="form-label text-capitalize">{field}</label>
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
//                       />
//                     </div>
//                   ))}
//                   <div className="text-center">
//                     <button onClick={updatePatientData} type="button" className="btn btn-danger px-5 mt-2">
//                       Update
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

// export default PatientList;
