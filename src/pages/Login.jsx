import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
   const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.username === 'admin' && form.password === 'admin') {
      localStorage.setItem('auth', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title mb-4 text-center">Login</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input name="username" className="form-control" value={form.username} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input name="password" type="password" className="form-control" value={form.password} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login