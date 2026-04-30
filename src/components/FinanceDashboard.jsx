import Navbar from "./Navbar";

export default function FinanceDashboard() {
  return (
    <>
    <Navbar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Finance / HR Dashboard</h1>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-2">Read-Only Access</h2>
        <p className="text-gray-600">
          You have read-only access to system data.
        </p>
      </div>
    </div>
    </>
  );
}