import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null; 

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>Your role: {user.role}</p>

    </div>
  );
};

export default Dashboard;
