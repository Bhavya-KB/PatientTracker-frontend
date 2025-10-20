import * as React from 'react';

import {  Routes, Route, Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Navbar from './components/Navbar';

import Patients from './pages/Patients';
import AddPatient from './pages/AddPatient';
import EditPatient from './pages/EditPatient';
import Appointments from './pages/Appointments';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import SideBar from './components/SideBar';

import Footer from './components/Footer';
import DashBoardPage from './pages/DashBoardPage';







function App() {
 

  return (
    <>

<AuthProvider>
   
        <Navbar />
        <div className="d-flex">
          <SideBar />
          <div className="flex-grow-1 p-4">
            <Routes>
              <Route path="/" element={<Login />} />
              {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
               <Route path="/dashboard" element={<PrivateRoute><DashBoardPage /></PrivateRoute>} />
              <Route path="/patients" element={<PrivateRoute><Patients /></PrivateRoute>} />
              <Route path="/add" element={<PrivateRoute><AddPatient /></PrivateRoute>} />
              <Route path="/edit/:id" element={<PrivateRoute><EditPatient /></PrivateRoute>} />
              <Route path="/appointments" element={<PrivateRoute><Appointments /></PrivateRoute>} />
              <Route path="/doctors" element={<PrivateRoute><Doctors /></PrivateRoute>} />
            </Routes>
          </div>
          
        </div>
        <Footer/>
    
    </AuthProvider>
      

      {/* OLD */}
      {/* <Navbar/>
      <div className="container ">
        <Routes>
          <Route path='/' element={<Home/>} />
           <Route path="/list" element={<PatientList />} /> 
        </Routes>
      </div> */}
   
    </>
  )
}

export default App
