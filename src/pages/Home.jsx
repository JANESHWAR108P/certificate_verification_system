import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Certificate Verification System</h1>
      <div className="space-x-4">
        <Link to="/login" className="px-6 py-2 bg-blue-600 text-white rounded">
          Login
        </Link>
        <Link to="/register" className="px-6 py-2 bg-green-600 text-white rounded">
          Register
        </Link>
      </div>
    </div>
  );
}
