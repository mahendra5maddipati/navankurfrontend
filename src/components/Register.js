import { useState } from "react";
import { registerUser } from "../Utils/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} style={styles.input}/>
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={styles.input}/>
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} style={styles.input}/>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: { padding: "1.5rem", maxWidth: "28rem", margin: "0 auto" },
  title: { fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" },
  form: { display: "flex", flexDirection: "column", gap: "1rem" },
  input: { width: "100%", padding: "0.5rem", border: "1px solid #ccc" },
  button: { width: "100%", backgroundColor: "#4299e1", color: "white", padding: "0.5rem", border: "none", cursor: "pointer" }
};

export default Register;
