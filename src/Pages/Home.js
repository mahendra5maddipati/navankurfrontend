import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a protected page. Only logged-in users can access it.</p>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" }
};

export default Home;
