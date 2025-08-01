import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, AlertCircle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";  // <-- missing import
import { useDispatch, useSelector } from "react-redux";
import { clearError, loginThunk } from "../../Store/authSlice";


function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);


 const handleLogin = () => {
  if (!email || !password) {
    dispatch(clearError());
    return;
  }

  setIsLoading(true);
  dispatch(loginThunk({ email, password }))
    .unwrap()
    .then(() => {
      setSuccess(true);
      navigate("/");
    })
    .catch(() => {
      // Error already handled via Redux global state (state.auth.error)
    })
    .finally(() => {
      setIsLoading(false);
    });
};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 relative">

        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-500/20 rounded-full p-4">
              <Lock className="text-emerald-400 w-10 h-10" />
            </div>
          </div>

          <h2 className="text-center text-white text-2xl font-semibold mb-2">Admin Portal</h2>
          <p className="text-center text-gray-400 mb-8">Log in to access your dashboard</p>

          {error && (
            <div className="mb-4 flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-300 p-3 rounded-lg">
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-3 rounded-lg">
              <CheckCircle size={18} />
              Login successful! Redirecting...
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="text-gray-400 text-sm">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="admin@example.com"
                className="bg-gray-800 text-white w-full pl-10 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-gray-400 text-sm">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter password"
                className="bg-gray-800 text-white w-full pl-10 pr-10 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-semibold transition-all ${
              isLoading
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-emerald-500 hover:bg-emerald-400 text-white"
            }`}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>

        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
