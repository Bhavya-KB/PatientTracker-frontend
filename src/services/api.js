import axios from 'axios';
//  const BASE_URL = "http://localhost:5000";
 const BASE_URL = 'https://patienttracker-backend.onrender.com';



export const getPatients =  () => axios.get(BASE_URL);
export const getPatient = (id) => axios.get(`${BASE_URL}/${id}`);
export const addPatient = (data) => axios.post(BASE_URL, data);
export const updatePatient = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deletePatient = (id) => axios.delete(`${BASE_URL}/${id}`);


