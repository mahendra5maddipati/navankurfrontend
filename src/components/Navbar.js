import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check if user is logged in

  const handleLogout = async () => {
    try {
      if (!token) throw new Error("No token found");

      await axios.post("https://navankurbackend.onrender.com/api/auth/logout", {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      localStorage.removeItem("token"); // Clear token on logout
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <nav style={styles.navbar}>
      <h2>My App</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        {token ? (
          <>
            <Link to="/profile" style={styles.link}>Profile</Link>
            <button onClick={handleLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
            <Link to="/forgot-password" style={styles.link}>Forgot Password</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: { display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "white" },
  link: { color: "white", marginRight: "15px", textDecoration: "none" },
  button: { background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }
};

export default Navbar;
