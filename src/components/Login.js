import { useState, useContext } from "react";
import { loginUser } from "../Utils/api";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(formData);
      login(data.token);
      localStorage.setItem("token", data.token); // Store token in localStorage
      navigate("/"); // Redirect to home or dashboard
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={styles.input}/>
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} style={styles.input}/>
        <button type="submit" style={styles.button}>Login</button>
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

export default Login;