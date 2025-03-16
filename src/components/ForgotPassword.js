import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://navankurbackend.onrender.com/api/auth/request-password-reset", { email });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Forgot Password</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
      {message && <p>{message}</p>}
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

export default ForgotPassword;
