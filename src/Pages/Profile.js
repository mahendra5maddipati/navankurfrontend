import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get("https://navankurbackend.onrender.com/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error.response?.data || error.message);
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div style={styles.container}>
      <h1>Profile Page</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" }
};

export default Profile;