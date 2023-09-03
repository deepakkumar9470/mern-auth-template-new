import React, { useState } from 'react';
import axios from 'axios';

function ResetPasswordForm() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = window.location.pathname.split('/').pop()
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/reset/${token}`, formData);
      console.log(response.data.message);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
