import React, { useEffect } from 'react';
import axios from 'axios';

function VerifyEmail() {
  useEffect(() => {
    const token = window.location.pathname.split('/').pop(); // Extract the token from the URL
    axios
      .get(`http://localhost:5000/api/auth/verify/${token}`)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
  }, []);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>Verifying your email...</p>
    </div>
  );
}

export default VerifyEmail;
