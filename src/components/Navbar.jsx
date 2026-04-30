import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const logout = async () => {
    try {
      await fetch("http://127.0.0.1:8000/api/logout/", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
        console.log(err);
        
    }

    localStorage.clear();

    navigate("/");
  };

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
      <h1 className="text-lg font-bold">InsighTeck Task1</h1>

      {role && (
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Role: <b>{role}</b>
          </span>

          <button
            onClick={logout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}