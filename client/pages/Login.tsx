import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { User } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation - in a real app, you'd connect to a backend
    if (username && password) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Left Diagonal Shape */}
        <div className="hidden md:block relative bg-white">
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute left-0 top-0 w-96 h-96"
              viewBox="0 0 500 500"
              fill="none"
            >
              <polygon points="0,0 500,0 400,500 0,500" fill="#5FD3D3" />
            </svg>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col items-center justify-center px-8 py-16 md:px-12">
          <h1 className="text-4xl font-bold text-center mb-4">LOGIN</h1>
          <div className="w-24 h-1 bg-fs-cyan rounded-full mb-12"></div>

          {/* User Icon */}
          <div className="mb-12">
            <div className="w-40 h-40 rounded-full border-8 border-black flex items-center justify-center">
              <User size={80} className="text-black" />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border-b-2 border-gray-400 bg-transparent text-black text-xl placeholder-gray-400 pb-2 focus:outline-none focus:border-fs-cyan"
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b-2 border-gray-400 bg-transparent text-black text-xl placeholder-gray-400 pb-2 focus:outline-none focus:border-fs-cyan"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-fs-cyan text-black font-bold py-3 text-xl hover:bg-opacity-90 transition-all"
            >
              LOGIN
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-black">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-bold underline hover:opacity-80"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
