import Navbar from "./Navbar";

export default function RecruiterDashboard() {
  return (
    <>
    <Navbar/>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recruiter Dashboard</h1>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-2">My Requirements</h2>
        <p className="text-gray-600">
          Here you can manage your job requirements and track candidates.
        </p>
      </div>
    </div>
    </>
  );
}