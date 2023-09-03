import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProfilePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to fetch user data from the server
    const fetchUserData = async () => {
      try {
        // Send an authenticated request with the JWT token in the Authorization header
        const token = localStorage.getItem('token'); 
        const headers = { Authorization: `Bearer ${token}` };

        const response = await axios.get('http://localhost:5000/api/auth/user', { headers });

        setUserData(response.data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Render other user data fields as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default ProfilePage;
