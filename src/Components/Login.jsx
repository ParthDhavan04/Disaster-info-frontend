import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    setLoading(true);
    setError('');

    try {
      const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        })
      });

      const data = await res.json();

      if (res.ok) {
        const token = data.token || '';
        const user = data.user || {}; // Assuming backend returns user object

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        // Dispatch event to update Navbar state
        window.dispatchEvent(new Event('authChanged'));

        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed — check credentials');
      }
    } catch (err) {
      console.error(err);
      setError('Server connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-12 bg-neoWhite dark:bg-neoDark relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-gYellow border-4 border-neoBlack shadow-neo rounded-full animate-bounce hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gBlue border-4 border-neoBlack shadow-neo transform rotate-12 hidden md:block"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white dark:bg-neoDark border-4 border-neoBlack dark:border-neoWhite shadow-neo-lg p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-gBlue mb-2 tracking-tighter">WELCOME BACK</h2>
            <p className="text-neoBlack dark:text-neoWhite font-bold">Sign in to access the Command Center</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            {error && (
              <div className="p-4 border-2 border-neoBlack bg-gRed/20 text-gRed font-bold flex items-center shadow-neo-sm">
                <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-lg font-black text-neoBlack dark:text-neoWhite uppercase">Email Address</label>
              <input
                name="email"
                type="email"
                required
                placeholder="name@company.com"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-neoBlack dark:border-neoWhite text-neoBlack dark:text-white placeholder-gray-500 outline-none focus:border-gBlue focus:shadow-neo-sm transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-lg font-black text-neoBlack dark:text-neoWhite uppercase">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 border-neoBlack dark:border-neoWhite text-neoBlack dark:text-white placeholder-gray-500 outline-none focus:border-gBlue focus:shadow-neo-sm transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neoBlack dark:text-white hover:text-gBlue transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-4 bg-gGreen text-white font-black text-xl border-2 border-neoBlack shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-x-[2px] disabled:translate-y-[2px]"
            >
              {loading ? 'AUTHENTICATING...' : 'SIGN IN'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm font-bold text-neoBlack dark:text-neoWhite">
            Don't have an account?{' '}
            <Link to="/signup" className="text-gBlue hover:underline decoration-2 underline-offset-2">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}