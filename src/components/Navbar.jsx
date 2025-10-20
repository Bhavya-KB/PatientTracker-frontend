
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand mb-0 h1">Patients Tracker</span>
        <Link to="/" className="btn btn-outline-light d-flex align-items-center">
        <FaUser className="me-2" />
          Login
        </Link>
      </div>
    </nav>
  );
}



//OLD

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaUserMd } from "react-icons/fa";
// import { MdOutlineSick } from "react-icons/md";

// function Navbar() {
//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg navbar-dark"
//         style={{
//           background: "linear-gradient(90deg, #007bff, #00bcd4)",
//           padding: "10px 0",
//         }}
//       >
//         <div className="container">
//           <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
//             <FaUserMd className="me-2" style={{ fontSize: "30px" }} />
//             Patient Record System
//           </Link>

//           <div className="d-flex align-items-center">
//             <Link
//               to="/"
//               className="text-white me-4"
//               style={{ textDecoration: "none", fontWeight: "500" }}
//             >
//               Home
//             </Link>
//             {/* <Link
//               to="/add"
//               className="text-white me-4"
//               style={{ textDecoration: "none", fontWeight: "500" }}
//             >
//               Add Patient
//             </Link> */}
//             <Link
//               to="/list"
//               className="text-white d-flex align-items-center"
//               style={{ textDecoration: "none", fontWeight: "500" }}
//             >
//               <MdOutlineSick className="me-1" />
//               View Patients
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
