import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RegisteredUsers.css";

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user.");
    }
  };

  const updateUser = (user) => {
    const updatedName = prompt("Enter updated name:", user.username);
    if (!updatedName) return;

    axios.put(`http://localhost:5000/api/users/${user._id}`, {
      ...user,
      username: updatedName
    })
      .then(() => {
        setUsers(users.map(u => (u._id === user._id ? { ...u, username: updatedName } : u)));
        alert("✅ User updated");
      })
      .catch(err => {
        console.error(err);
        alert("Failed to update user");
      });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary fw-bold mb-4">👥 Registered Users</h2>
      <div className="row g-4">
        {users.map((user) => (
          <div className="col-md-4" key={user._id}>
            <div className="user-card p-4 text-center shadow-sm position-relative">
              <div className="action-icons">
                <button
                  className="icon-btn edit"
                  title="Edit User"
                  onClick={() => updateUser(user)}
                >✏️</button>
                <button
                  className="icon-btn delete"
                  title="Delete User"
                  onClick={() => deleteUser(user._id)}
                >🗑️</button>
              </div>
              <div className="user-icon mb-3">
                {user.role === "doctor" ? "👨‍⚕️" : "🧑‍💼"}
              </div>
              <h5 className="mb-1 text-dark">{user.username}</h5>
              <p className="text-muted mb-0">{user.email}</p>
              <span className={`badge ${user.role === "doctor" ? "bg-success" : "bg-info"} mt-2`}>
                {user.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisteredUsers;
