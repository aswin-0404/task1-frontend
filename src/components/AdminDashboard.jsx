import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/get_users/", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Failed to fetch users");
        return;
      }

      setUsers(data);
    } catch (err) {
      console.log(err);
      ;
    }
  };

  const toggleStatus = async (userId) => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/api/togle-status/${userId}/`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.detail || "Failed to update status");
        return;
      }

      fetchUsers();
    } catch (err) {
      console.log(err);
      ;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.role}</td>
              <td className="p-2 border">
                {user.is_active ? "Active" : "Inactive"}
              </td>
              <td className="p-2 border">
                <button
                  onClick={() => toggleStatus(user.id)}
                  className={`px-3 py-1 rounded text-white ${
                    user.is_active ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {user.is_active ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}