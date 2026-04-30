import Navbar from "./Navbar";

export default function ManagerDashboard() {
  return (
    <>
    <Navbar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Delivery Manager Dashboard</h1>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-2">Team Overview</h2>
        <p className="text-gray-600">
          View team performance, progress, and delivery status.
        </p>
      </div>
    </div>
    </>
  );
}