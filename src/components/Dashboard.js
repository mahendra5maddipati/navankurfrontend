import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user?.username}!</h2>
      <button onClick={logout} className="bg-red-500 text-white p-2">Logout</button>
    </div>
  );
};

export default Dashboard;
